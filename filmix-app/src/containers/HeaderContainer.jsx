import React from 'react';
import Header from '../views/Header/Header';
import{ withRouter } from 'react-router-dom';

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedOut: true 
        }
    }

    handleLogin = () => {
        return !localStorage.Token ?  this.props.history.push('/login') : null 
    }

    handleLogout = () => {
        localStorage.clear();
        this.setState({ loggedOut: !this.state.loggedOut })
    }

    showLogout = () => {

    }

    render() {
        return(
            <Header 
                current={this.props.current} 
                loginRedirect={this.handleLogin} 
                user={this.props.user} 
                logout={this.handleLogout}
            />
        )
    }
}

export default withRouter(HeaderContainer);