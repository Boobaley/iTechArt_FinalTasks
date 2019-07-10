import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    wrapper: {
        position: 'relative'
    },
    input: {
        padding: 10,
        borderRadius: 5,
        border: 'none',
        outline: 0,
    },
    inputWrapper: {
        position: 'relative'
    },
    shadowDiv: {
        position: "absolute",
        height: 'auto',
        top: 50,
        borderRadius: 5,
        width: 189,
        cursor: 'pointer',
        '& div': {
            padding: 5,
            '&:hover': {
                background: 'tomato',
                borderRadius: 5,
                
            }
        }
    }
  }));

