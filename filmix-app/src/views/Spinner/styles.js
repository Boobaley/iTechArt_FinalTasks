import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    spinnerWrapper: {
        height: '100vh',
        width: '100vw',
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        zIndex: 1
    }
});

export const loaderConfig = {
    type:"Triangle",
    color:"#00BFFF",
    height:"100",
    width:"100"
}