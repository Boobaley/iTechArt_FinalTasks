import React from 'react';
import Header from '../views/Header/Header';
import{ withRouter } from 'react-router-dom';

class HeaderContainer extends React.Component {

    handleLogin = () => {
        this.props.history.replace('/login')
    }

    render() {
        return(
            <Header current={this.props.current} loginRedirect={this.handleLogin}/>
        )
    }
}

export default withRouter(HeaderContainer);