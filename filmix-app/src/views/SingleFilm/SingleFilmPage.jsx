import React from 'react';
import useStyles from './styles';
import HeaderContainer from '../../containers/HeaderContainer'
import GallerySlider from '../GallerySlider/GallerySlider';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const SingleFilmPage = (props) => {
    console.log(props.title)
    const classes = useStyles();
    
    return(
        <React.Fragment>
            <HeaderContainer current={1}/>
            <div className={classes.wrapper}>
                <div className={classes.imageWrapper}>
                    <div className={classes.image} style={{ backgroundImage: `url(${props.film.avatar})` }}></div>
                    <div className={classes.rating}>
                        <Rater total={5} rating={props.film.rating} interactive={false}/>
                    </div>
                </div>
                <div className={classes.infoWrapper}>
                    <div className={classes.title}>{props.film.title}</div>
                    <div className={classes.optionWrapper}>
                        <span className={classes.optionTitle}>Director: </span> 
                        <div style={{display: 'inline-block'}}></div>
                    </div>
                    <div className={classes.optionWrapper}>
                        <span className={classes.optionTitle}>Actors: </span> 
                        <div style={{display: 'inline-block'}}></div>
                    </div>
                    <div className={classes.optionWrapper}>
                        <span className={classes.optionTitle}>Creation Date: </span> 
                        <div style={{display: 'inline-block'}}></div>
                    </div>
                    <div className={classes.optionWrapper}>
                        <span className={classes.optionTitle}>Description: </span> 
                        <div className={classes.optionText}>{props.film.description}</div>
                    </div>
                </div>
            </div>
            <GallerySlider gallery={props.film.gallery}/>
        </React.Fragment>
    )
}

export default SingleFilmPage;