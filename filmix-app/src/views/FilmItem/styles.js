import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
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
        '&:hover': {
            boxShadow: 'inset 0px 0px 190px 41px rgba(0,0,0,0.75)',
            transition: '.3s'
        },
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