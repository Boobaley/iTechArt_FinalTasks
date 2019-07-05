import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';

export const SignInForm = (props) => {
    const classes = useStyles();

    return(
        <Paper className={classes.wrapper}>
            <h1 className={classes.title}>Sign In / Sign Up</h1>
            <form onSubmit={props.submitForm} className={classes.form}>
                { props.signUpTracker
                    ? <input 
                        type="text"
                        placeholder="Name"
                        required
                        className={classes.input}
                        onChange={props.nickChange}
                        value={props.nickVal}
                      />
                    : null
                }
                <input 
                    type="email"
                    placeholder="Email"
                    required
                    className={classes.input}
                    onChange={props.emailChange}
                    value={props.emailVal}
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
                { !props.signUpTracker ? <Button type="submit" variant='contained' color="primary">Sign In</Button> : null}
                { !props.signUpTracker ? <div className={classes.or}>or</div> : null}
                { !props.signUpTracker 
                    ? <Button variant='contained' color="secondary" onClick={props.signUp}>Sign Up</Button>
                    : <Button type="submit" variant='contained' color="secondary">Sign Up</Button>
                }

                <i 
                    className="material-icons" 
                    style={{position: "absolute",fontSize: 30, color: '#000', top: 10, right: -10, width: 55,  cursor: 'pointer'}}
                    onClick={props.close}
                >
                    close
                </i>

                { props.signUpTracker 
                
                    ? <i 
                        className="material-icons"
                        style={{position: "absolute",fontSize: 30, color: '#000', top: 10, left: 10, width: 55,  cursor: 'pointer'}}
                        onClick={props.back}
                      >
                        arrow_back
                      </i>
                    : null
                }
                
            </form>
        </Paper>  
    )
}