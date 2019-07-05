import React from 'react';
import Header from '../views/Header/Header';
import{ withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
} 
class HeaderContainer extends React.Component {

    handleLogin = () => {
        return !this.props.user.user ?  this.props.history.replace('/login') : null 
    }

    handleLogout = () => {

    }

    render() {
        return(
            <Header current={this.props.current} loginRedirect={this.handleLogin} user={this.props.user}/>
        )
    }
}

export default withRouter(connect(mapStateToProps)(HeaderContainer));