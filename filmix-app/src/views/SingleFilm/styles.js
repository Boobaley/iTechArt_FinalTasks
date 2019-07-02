import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        marginTop: '7vh',
        display: 'flex',
        padding: 100,
        paddingBottom: 0,
        backgroundColor: '#7b1a2f'
    },
    imageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 600,
        width: 400
    },
    image: {
        width: 400,
        height: 550,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    rating: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    infoWrapper: {
        height: 'max-content',
        padding: '0 50px'
    },
    title: {
        margin: '0 auto 40px auto',
        fontSize: 50,
        fontWeight: 700,
    },
    optionWrapper: {
        maxWidth: 1000,
        marginBottom: 25
    },
    optionTitle: {
        fontSize: 20,
        marginBottom: 25,
        width: 'max-content',
        color: 'tomato'
    },
    optionText: {
        display: 'inline-block',
        fontSize: 14,
    }
});

export default useStyles;