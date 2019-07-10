import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import SearchContainer  from '../../containers/SearchContainer';

const Header = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar className={classes.headerWrapper}>
                    <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                        className={classes.title} 
                        variant="h4" 
                        noWrap
                    >
                        <a href="/" style={{textDecoration: 'none', color: '#fff'}}>
                            Film<span className={classes.coloredWord}>MiX</span>  
                        </a>  
                    </Typography>
                    <MenuNavigation current={props.current} />
                    <div className={classes.searchLoginWrapper}>
                        {props.current === 1 
                            ?  <SearchContainer/> 
                            : null
                        }
                        
                        {!localStorage.Token
                            ? <Button color='inherit' onClick={props.loginRedirect}>Sign In / Sign Up</Button>
                            : <Button color='inherit' onClick={props.logout}>{localStorage.userName}</Button>
                        }  
                    </div> 
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;