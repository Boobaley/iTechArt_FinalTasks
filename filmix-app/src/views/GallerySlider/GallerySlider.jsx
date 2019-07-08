import React, { Component } from "react";
import Slider from "react-slick";
import { styles } from './styles';


class GallerySlider extends Component {
    renderSlides = () => {
        return this.props.gallery.map((link, index) => {
            return (
                <div key={index}>
                    <div 
                        style={{
                            height: 250,
                            marginRight: 10,
                            backgroundImage: `url(${link})`,
                            backgroundSize:'cover', 
                            backgroundRepeat: 'no-repeat',
                            '&:last-of-type': {
                                marginRight: 0
                            },
                        }}
                    >
                    </div>
                </div>
            )
        })
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 900,
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        }
        return (
          <div style={styles.wrapper}>
                <h1 style={styles.sliderTitle}>Moments...</h1>
            <Slider {...settings}>
              {this.props.gallery && this.renderSlides()}
            </Slider>
          </div>
        );
    }
}
export default GallerySlider;
