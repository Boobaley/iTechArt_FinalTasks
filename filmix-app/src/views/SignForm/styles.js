import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    wrapper: {
        padding: 100, 
        borderRadius: 20,
        position: 'relative'
    },
    title: {
        textAlign: 'center',
        marginBottom: 55,
        color: '#2bc145'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 300
    },
    input: {
        padding: 15,
        outline: 0,
        border: '2px solid dodgerblue',
        borderRadius: 5,
        marginBottom: 15,
        '&:last-of-type': {
            marginBottom: 25
        },
    },
    or: {
        width: 'max-content',
        margin: '0 auto',
        fontSize: 20
    }
}));

export const iconsStyles = {
    back: {
        position: "absolute",
        fontSize: 30, 
        color: '#000', 
        top: 10, left: 10, 
        width: 55,  
        cursor: 'pointer'
    },
    close: {
        position: "absolute",
        fontSize: 30, 
        color: '#000', 
        top: 10, 
        right: -10, 
        width: 55,  
        cursor: 'pointer'
    }
}