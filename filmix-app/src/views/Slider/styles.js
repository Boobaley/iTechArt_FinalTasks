import { makeStyles } from '@material-ui/core/styles';
import Potter from '../../images/61577-oblozhka_alboma-garri_potter-chelovek-prohlada-film-1920x1080.jpg';
import DeadPull from '../../images/38597.jpg';
import Poster from '../../images/6613186950e27865cde3e1dda004e404.jpg';

export const useStyles = makeStyles(() => ({
    sliderWrapper: {
        margin: '10vh auto 0 auto'
    },
    slidesWrapper: {
        width: '95vw',
        margin: '0 auto',
    },
    title: {
        fontSize: 70,
        fontWeight: 700,
        color: '#fff',
        margin: '0 auto',
        width: 'max-content',
        marginBottom: 30
    },
    sliderItem: {
        height: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 0,
    },
    sliderItemContent_1 : {
        height: '100%',
        backgroundImage: `url(${Potter})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginRight: 35,
        position: 'relative'
    },
    sliderItemContent_2: {
        height: '100%',
        backgroundImage: `url(${DeadPull})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginRight: 35,
        position: 'relative'
    },
    sliderItemContent_3: {
        height: '100%',
        backgroundImage: `url(${Poster})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginRight: 35,
        position: 'relative'
    },
    button: {
        position: "absolute",
        bottom: 15,
        left: 15,
    }
  }));