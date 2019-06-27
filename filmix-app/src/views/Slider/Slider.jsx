import React from "react";
import Slider from "react-slick";
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';

const SimpleSlider = () => {
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
                        <Button variant="contained" color="primary" className={classes.button}>Read More</Button>
                    </div>
                </div>
                <div className={classes.sliderItem}>
                    <div className={classes.sliderItemContent_1}>
                        <Button variant="contained" color="primary" className={classes.button}>Read More</Button>
                    </div>
                </div>
                <div className={classes.sliderItem}>
                    <div className={classes.sliderItemContent_3}>
                        <Button variant="contained" color="primary" className={classes.button}>Read More</Button>
                    </div>
                </div>
            </Slider>
        </div>
    );
  }

export default SimpleSlider;