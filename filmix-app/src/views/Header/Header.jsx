import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import MenuNavigation from '../MenuNavigation/MenuNavigation';

const Header = (props) => {
const classes = useStyles();
console.log(props.user.user)
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
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'Search' }}
                        />
                    </div>
                    <Button color='inherit' onClick={props.loginRedirect}>{!props.user.user ? 'Sign In / Sign Up' : 'Logout'}</Button>
                </div> 
            </Toolbar>
        </AppBar>
    </div>
);
};

export default Header;