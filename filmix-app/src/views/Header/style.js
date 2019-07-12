import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      position: "fixed",
      top: 0,
      zIndex: 1
    },
    headerWrapper: {
      justifyContent: 'space-between',
    },
    coloredWord: {
        color: 'salmon',
        fontWeight: 700
    },
    searchLoginWrapper : {
        display: 'flex',
        alignItems: 'center'
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
    menuButton: {
      marginRight: theme.spacing(2),
      display: 'none'
    },
    title: {
      display: 'none',
      color: 'white',
      fontWeight: 200,
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        width: 'max-content'
      },
    },
    appName: {
        textDecoration: 'none', 
        color: '#fff'
    }
  }));