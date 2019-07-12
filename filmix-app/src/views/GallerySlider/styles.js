export const styles = {
    wrapper: {
        width: '100vw', 
        margin: '0 auto',
        padding: 50,
        backgroundColor: '#0b1020',
        boxShadow: 'inset 0px 0px 163px 64px rgba(0,0,0,0.75)'
    },
    sliderTitle: {
        fontSize: 50,
        width: 'max-content',
        margin: '0 auto',
        marginBottom: 40
    },
};

export const settings = {
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