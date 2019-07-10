import React from 'react';
import { styles } from './styles';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';

export const  Search = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <input 
                type="text" 
                className={classes.input}
                placeholder='Search...'
                value={props.searchTerms}
                onChange={props.inputChange}
            />
            <Paper className={classes.shadowDiv}>
                {props.renderMatches()}
            </Paper>
        </div>
    );
}