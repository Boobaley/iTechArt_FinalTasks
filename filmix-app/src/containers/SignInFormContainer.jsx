import React, { Component } from 'react';
import { SignInForm } from '../views/SignForm/SignInForm';
import{ withRouter } from 'react-router-dom';
import { Spinner } from '../views/Spinner/Spinner';

class SignInFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nick: '',
            email: '',
            password: '',
            loading: false
        }
    }

    onNickChange = (event) => {
        this.setState({ nick: event.target.value });
    }
    
    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    } 

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }
    
    handleClose = () => {
        this.props.history.replace('/');
    }

    handleBack = () => {
        this.setState({ userName: '', email: '', password: '' });
        this.props.history.goBack();
    }

    handleSignUp = (e) => {
        e.preventDefault();
        this.setState({ userName: '', email: '', password: '' });
        if (!this.props.signUpTracker) {
            this.props.history.push('/signup'); 
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });

        let body = {
            user: {
                userName: this.state.nick,
                email: this.state.email,
                password: this.state.password
            }
        }
        let headers = {
            "Content-Type": "application/json"
        };

        const option = { method: 'POST', body: JSON.stringify(body), headers };
        let url = 'http://localhost:3000/api/signup';

        if (!this.props.signUpTracker) {
            url = 'http://localhost:3000/api/login';
            body = {
                user: {
                    email: this.state.email,
                    password: this.state.password
                }
            }
        };

        fetch(url, option)
            .then((result) => {
                this.setState({ loading: false });
                return result.json();
            })
            .then((result) => {
                console.log(result);
                if (result.token) {
                    localStorage.setItem('Token', result.token);
                    localStorage.setItem('userName', result.userName);
                    this.setState({ nick: '', email: '', password: '' });
                    this.props.history.replace('/');
                } else {
                    this.setState({ nick: '', email: '', password: '' });
                    alert(result.message);
                } 
            })
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.loading) {
            return <Spinner/>
        }
        return (
            <div style={{margin: '20vh auto 0 auto', width: 'max-content'}}>
                <SignInForm 
                    signUpTracker={this.props.signUpTracker}
                    nickChange={this.onNickChange}
                    nickVal={this.state.nick}
                    emailChange={this.onEmailChange}
                    emailVal={this.state.email}
                    passwordChange={this.onPasswordChange}
                    passwordVal={this.state.password}
                    close={this.handleClose}
                    back={this.handleBack}
                    signUp={this.handleSignUp}
                    submitForm={this.handleSubmit}
                />
            </div>
        );
    }
}

export default withRouter(SignInFormContainer);