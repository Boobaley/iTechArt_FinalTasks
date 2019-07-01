import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        height: '100vh',
        marginTop: '7vh',
        display: 'flex',
        padding: 10
    },
    imageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 600,
        width: 400
    },
    image: {
        width: '100%',
        height: 550,
        border: '1px solid red'
    },
    rating: {
        width: '100%',
        height: 50,
        border: '1px solid tomato'
    },
    infoWrapper: {
        width: '100%',
        height: 'max-content',
        border: '1px solid green',
        padding: '0 50px'
    },
    title: {
        textAlign: 'center',
        fontSize: 70,
        fontWeight: 700
    },
    infoField: {
        fontSize: 25,
        marginBottom: 25
    }
});

export default useStyles;