import React from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

function stringCutter(filmName) {
    if (filmName.length < 14) {
        console.log(filmName)
        return filmName;
    } else {
        console.log('too long')
        return filmName.slice(0, 11) + '...';
    }
};

const FilmItem = (props) => {
    const classes = useStyles();

    
    return(
        <Paper className={classes.wrapper}>
            <div className={classes.image} style={{backgroundImage: `url(${props.filmImage})`}}></div>
            <div className={classes.title}>{stringCutter(props.filmName)}</div>
        </Paper>
    )
};

FilmItem.propTypes = {
    filmImage: PropTypes.string.isRequired,
    filmName: PropTypes.string.isRequired
}

export default FilmItem;