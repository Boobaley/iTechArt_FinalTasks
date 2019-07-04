import React, { useState } from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import FilmCard from '../FilmCard/FilmCard';
import { stringCutter } from '../../js/customFunctions';

const FilmItem = (props) => {
    const classes = useStyles();
    const [opened, toggleOpen] = useState(false);
    return(
        <Paper className={classes.wrapper} onMouseEnter={() => toggleOpen(!opened)} onMouseLeave={() => toggleOpen(!opened)}>
            <div className={classes.image} style={{backgroundImage: `url(${props.avatar})`}}></div>
            <div className={classes.title}>{ stringCutter(props.filmName, 14) }</div>
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