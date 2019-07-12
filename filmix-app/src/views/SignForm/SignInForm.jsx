import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles, iconsStyles } from './styles';
import Paper from '@material-ui/core/Paper';

export const SignInForm = (props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.wrapper}>
            {!props.signUpTracker 
                ?  
                <React.Fragment>
                    <h1 className={classes.title}>Sign In / Sign Up</h1>
                    <form onSubmit={props.submitForm} className={classes.form}>
                        <input 
                            type="email"
                            placeholder="Email"
                            required
                            className={classes.input}
                            onChange={props.emailChange}
                            value={props.emailValue}
                        />
                        <input 
                            type="password"
                            placeholder="Password"
                            minLength="6"
                            required
                            className={classes.input}
                            onChange={props.passwordChange}
                            value={props.passwordVal}
                        />
                        <Button type="submit" variant='contained' color="primary">Sign In</Button>
                        <div className={classes.or}>or</div> 
                        <Button variant='contained' color="secondary" onClick={props.signUp}>Sign Up</Button>
                        <i 
                            className="material-icons" 
                            style={iconsStyles.close}
                            onClick={props.close}
                        >
                            close
                        </i>
                    </form>
                </React.Fragment>
                : 
                <React.Fragment>
                    <h1 className={classes.title}>Sign Up</h1>
                    <form onSubmit={props.submitForm} className={classes.form}>
                        <input 
                            type="text"
                            placeholder="Name"
                            required
                            className={classes.input}
                            onChange={props.nickChange}
                            value={props.nickValue}
                        />
                        <input 
                            type="email"
                            placeholder="Email"
                            required
                            className={classes.input}
                            onChange={props.emailChange}
                            value={props.emailValue}
                        />
                        <input 
                            type="password"
                            placeholder="Password"
                            minLength="6"
                            required
                            className={classes.input}
                            onChange={props.passwordChange}
                            value={props.passwordVal}
                        />
                        <Button type="submit" variant='contained' color="secondary">Sign Up</Button>
                        <i 
                            className="material-icons" 
                            style={iconsStyles.close}
                            onClick={props.close}
                        >
                            close
                        </i>
                        <i 
                            className="material-icons"
                            style={iconsStyles.back}
                            onClick={props.back}
                        >
                            arrow_back
                        </i>
                    </form>
                </React.Fragment>
            }
        </Paper>  
    );
}       
    
