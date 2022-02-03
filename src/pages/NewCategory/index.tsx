import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { createCategory } from '../../services/category';
import * as Styled from './styles';

interface NewCategoryProps {
  open: boolean;
  handleClose: () => void;
}

function NewCategory({ handleClose, open }: NewCategoryProps) {
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [descriptionError, setDescriptionError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    accept: 'image/*',
    onDropAccepted: (files) => {
      setFile(files[0]);
      setPreview(URL.createObjectURL(files[0]));
    },
  });

  const validateForm = (): boolean => {
    if (description && file) return true;
    return false;
  };

  const onSave = async () => {
    if (validateForm() && description && file) {
      try {
        setLoading(true);
        await createCategory({ description, file });
        handleClose();
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">New category</DialogTitle>
      {loading ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '64px',
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <DialogContent>
            <DialogContentText>
              Enter the necessary information to register a new category.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              fullWidth
              onChange={({ target }) => {
                setDescription(target.value);
              }}
              error={descriptionError}
              helperText="Description is required"
            />
            {preview ? (
              <img src={preview} />
            ) : (
              <Styled.UploadBox {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some image here, or click to select file</p>
                )}
              </Styled.UploadBox>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={onSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}

export default NewCategory;
