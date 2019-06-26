import { makeStyles } from '@material-ui/core/styles';
import Potter from '../../images/61577-oblozhka_alboma-garri_potter-chelovek-prohlada-film-1920x1080.jpg';
import DeadPull_1 from '../../images/38597.jpg';
import Poster from '../../images/6613186950e27865cde3e1dda004e404.jpg';

export const useStyles = makeStyles(() => ({
    sliderWrapper: {
        width: '95vw',
        margin: '0 auto',
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
        marginRight: 35
    },
    sliderItemContent_2: {
        height: '100%',
        backgroundImage: `url(${DeadPull_1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginRight: 35
    },
    sliderItemContent_3: {
        height: '100%',
        backgroundImage: `url(${Poster})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginRight: 35
    }
  }));