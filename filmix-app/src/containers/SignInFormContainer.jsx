import React, { Component } from 'react';
import { SignInForm } from '../views/SignForm/SignInForm';
import{ withRouter } from 'react-router-dom';
import { Spinner } from '../views/Spinner/Spinner';

class SignInFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            loading: false
        }
    }

    handleSignUp = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
        this.props.history.replace('/signUp');
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '', loading: true });

        const body = {
            user: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        }
        let headers = {
            "Content-Type": "application/json"
        };

        const option = {method: 'POST', body: JSON.stringify(body), headers}
        let url = 'http://localhost:3000/api/signin'

        if (!this.props.signUpTracker) {
            url = 'http://localhost:3000/api/login'
        }

        fetch(url, option)
            .then((result) => {
                this.setState({ loading: false });
                return result.ok;
            })
            .then((result) => {
                if (result) {
                    return this.props.history.replace('/');
                }
                return this.props.history.replace('/login');
            });
    }

    handleBack = () => {
        this.props.history.replace('/')
    }

    render() {
        if (this.state.loading) {
            return <Spinner/>
        }
        return (
            <div style={{margin: '20vh auto 0 auto', width: 'max-content'}}>
                <SignInForm 
                    getBack={this.handleBack} 
                    signUp={this.handleSignUp} 
                    signUpTracker={this.props.signUpTracker}
                    email={this.onEmailChange}
                    password={this.onPasswordChange}
                    emailVal={this.state.email}
                    passwordVal={this.state.password}
                    submit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default withRouter(SignInFormContainer);