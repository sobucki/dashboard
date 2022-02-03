import { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { api } from '../../services/api';
import { loadCategoryList } from '../../services/category';
import { Category as CategoryType } from '../../services/types';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NewCategory from '../NewCategory';

const columns = [
  { field: 'id', headerName: 'ID', width: 350 },
  {
    field: 'description',
    headerName: 'Description',
    width: 500,
  },
  {
    field: 'link',
    headerName: 'Image',
    width: 150,
    renderCell: (params: any) => (
      <img
        alt="category avatar"
        src={`https://app-gobarber-image.s3.us-east-1.amazonaws.com/${params.value}`}
      />
    ),
  },
  {
    field: 'createdAt',
    headerName: 'Created at',
    type: 'dateTime',
    width: 300,
  },
];

function Category() {
  const [categories, setCategories] = useState<CategoryType[] | undefined>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    loadData();
  };

  const loadData = async () => {
    try {
      setLoading(true);
      const categoryList = await loadCategoryList();
      // await new Promise((resolve) => setTimeout(resolve, 5000));
      setCategories(categoryList);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        endIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        New
      </Button>
      <DataGrid
        rows={categories || []}
        columns={columns}
        pageSize={5}
        loading={loading}
        rowHeight={120}
        headerHeight={100}
        onCellClick={(param) => {
          console.log(param);
        }}
      />
      <NewCategory handleClose={handleClose} open={open} />
    </>
  );
}

export default Category;
