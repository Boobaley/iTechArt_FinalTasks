import React, { useState } from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import FilmCard from '../FilmCard/FilmCard';

function stringCutter(filmName) {
    if (filmName.length < 14) {
        return filmName;
    } else {
        return filmName.slice(0, 11) + '...';
    }
};

const FilmItem = (props) => {
    const classes = useStyles();
    const [opened, toggleOpen] = useState(false);
    return(
        <Paper className={classes.wrapper} onMouseEnter={() => toggleOpen(!opened)} onMouseLeave={() => toggleOpen(!opened)}>
            <div className={classes.image} style={{backgroundImage: `url(${props.avatar})`}}></div>
            <div className={classes.title}>{ stringCutter(props.filmName) }</div>
            { opened ? <FilmCard id={props.id} image={props.avatar} filmName={props.filmName} description={props.description} redirect={props.redirect}/> : null }
        </Paper>
    )
};

FilmItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    filmName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default FilmItem;