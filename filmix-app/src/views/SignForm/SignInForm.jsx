import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';

export const SignInForm = (props) => {
    const classes = useStyles();

    return(
        <Paper className={classes.wrapper}>
            <h1 className={classes.title}>Sign In / Sign Up</h1>
            <form onSubmit={props.submit} className={classes.form}>
                <input 
                    type="text"
                    placeholder="Name"
                    required
                    className={classes.input}
                    onChange={props.name}
                    value={props.nameVal}
                />
                <input 
                    type="email"
                    placeholder="Email"
                    required
                    className={classes.input}
                    onChange={props.email}
                    value={props.emailVal}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    minLength="6"
                    required
                    className={classes.input}
                    onChange={props.password}
                    value={props.passwordVal}
                />
                <i class="material-icons" 
                    style={{position: "absolute",fontSize: 30, color: 'lightgrey', top: 10, right: -10, width: 55,  cursor: 'pointer'}}
                    onClick={props.getBack}
                >
                    close
                </i>
                {props.signUpTracker === false ? <Button type="submit" variant='contained' color="primary">Sign In</Button> : null}
                {props.signUpTracker === false ? <div className={classes.or}>or</div> : null}
                {props.signUpTracker === false 
                    ? <Button variant='contained' color="secondary" onClick={props.signUp}>Sign Up</Button>
                    : <Button type="submit" variant='contained' color="secondary">Sign Up</Button>
                }
            </form>
        </Paper>  
    )
}