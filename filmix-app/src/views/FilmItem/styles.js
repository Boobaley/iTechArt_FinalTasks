import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30,
        marginBottom: 20,
        width: 155,
        minHeight: 267,
        '&:hover': {
            color: 'salmon',
            transition: '.3s'
        },
        color: '#000'
    },
    image: {
        width: 155,
        height: 235,
        backgroundSize: 'cover',
        cursor: 'pointer'
    },
    title: {
        fontSize: 17,
        color: 'inherit',
        fontWeight: 600,
        padding: 5,
        textAlign: 'center',
        width: '155'
    }
}));