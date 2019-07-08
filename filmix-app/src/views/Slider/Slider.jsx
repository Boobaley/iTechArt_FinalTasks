import React from "react";
import Slider from "react-slick";
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const SimpleSlider = (props) => {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        pauseOnHover: true
    };
    return (
        <div className={classes.sliderWrapper}>
            <div className={classes.title}>FILMS WE LOVE</div>
            <Slider {...settings} className={classes.slidesWrapper}>
                <div className={classes.sliderItem}>
                    <div className={classes.sliderItemContent_2}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                            onClick={() => props.history.push('/films')}
                        >   Go to Library
                        </Button>
                    </div>
                </div>
                <div className={classes.sliderItem}>
                    <div className={classes.sliderItemContent_1}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                            onClick={() => props.history.push('/films')}
                        >   Go to Library
                        </Button>
                    </div>
                </div>
                <div className={classes.sliderItem}>
                    <div className={classes.sliderItemContent_3}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                            onClick={() => props.history.push('/films')}
                        >   Go to Library
                        </Button>
                    </div>
                </div>
            </Slider>
        </div>
    );
  }

export default withRouter(SimpleSlider);