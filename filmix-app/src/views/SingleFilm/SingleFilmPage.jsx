import React from 'react';
import useStyles from './styles';

const SingleFilmPage = (props) => {
    const classes = useStyles();
    
    return(
        <div className={classes.wrapper}>
            <div className={classes.imageWrapper}>
                <div className={classes.image}>image</div>
                <div className={classes.rating}>rating</div>
            </div>
            <div className={classes.infoWrapper}>
                <div className={classes.title}>{props.film.title}</div>
                <div className={classes.infoField}>Creation Date:</div>
                <div className={classes.infoField}>Director:</div>
                <div className={classes.infoField}>Actors:</div>
                <div className={classes.infoField}>About Film:</div>
            </div>
        </div>
    )
}

export default SingleFilmPage;