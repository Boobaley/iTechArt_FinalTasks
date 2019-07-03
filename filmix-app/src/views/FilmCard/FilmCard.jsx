import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { stringCutter } from '../../js/customFunctions';

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => props.redirect(props.id)}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.filmName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           { stringCutter(props.description, 100) }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={() => props.redirect(props.id)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}