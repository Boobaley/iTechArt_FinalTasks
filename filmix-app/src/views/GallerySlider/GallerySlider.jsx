import React, { Component } from "react";
import Slider from "react-slick";
import { styles, settings } from './styles';

class GallerySlider extends Component {

    renderSlides = () => {
        if (this.props.gallery) {
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
            });
        }
        return null;   
    }

    render() {
        return (
          <div style={styles.wrapper}>
                <h1 style={styles.sliderTitle}>Moments...</h1>
            <Slider {...settings}>
              {this.renderSlides()}
            </Slider>
          </div>
        );
    }
}
export default GallerySlider;
