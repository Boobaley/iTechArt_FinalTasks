import React, { useState } from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import FilmCard from '../FilmCard/FilmCard';

function stringCutter(filmName) {
    if (filmName.length < 14) {
        return filmName;
    } else {
        console.log('too long')
        return filmName.slice(0, 11) + '...';
    }
};

const FilmItem = (props) => {
    const classes = useStyles();
    const [opened, toggleOpen] = useState(false);
    return(
        <Paper className={classes.wrapper} onMouseEnter={() => toggleOpen(true)} onMouseLeave={() => toggleOpen(false)}>
            <div className={classes.image} style={{backgroundImage: `url(${props.filmImage})`}}></div>
            <div className={classes.title}>{stringCutter(props.filmName)}</div>
            {opened === true ? <FilmCard image={props.filmImage}/> : null}
        </Paper>
    )
};

FilmItem.propTypes = {
    filmImage: PropTypes.string.isRequired,
    filmName: PropTypes.string.isRequired
}

export default FilmItem;