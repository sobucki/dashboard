import React from 'react';
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      margin: '16px 0px',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 50,
    },
  })
);

function CategoryCard() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="button">
            Categoria 1
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://www.ahnegao.com.br/wp-content/uploads/2021/02/meme-saba-5.jpg"
        title="Categoria 1"
      />
    </Card>
  );
}
export default CategoryCard;
