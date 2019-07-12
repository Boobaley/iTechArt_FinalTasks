import React from 'react';
import Loader from 'react-loader-spinner';
import { useStyles, loaderConfig } from './styles';

export const Spinner = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.spinnerWrapper}>
            <Loader {...loaderConfig} />   
        </div>  
    )
}