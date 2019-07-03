import React from 'react';
import Loader from 'react-loader-spinner';
import { useStyles } from './styles';

export const Spinner = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.spinnerWrapper}>
            <Loader 
                type="Triangle"
                color="#00BFFF"
                height="100"	
                width="100"
            />   
        </div>  
    )
}