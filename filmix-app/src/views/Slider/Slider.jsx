import React from "react";
import Slider from "react-slick";
import { useStyles } from './styles';

const SimpleSlider = () => {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings} className={classes.sliderWrapper}>
          <div className={classes.sliderItem}>
            <div className={classes.sliderItemContent_1}></div>
          </div>
          <div className={classes.sliderItem}>
            <div className={classes.sliderItemContent_2}></div>
          </div>
          <div className={classes.sliderItem}>
            <div className={classes.sliderItemContent_3}></div>
          </div>
        </Slider>
      </div>
    );
  }

export default SimpleSlider;