import React from 'react';
import Header from '../views/Header/Header';

class HeaderContainer extends React.Component {

    render() {
        return(
            <Header current={this.props.current}/>
        )
    }
}

export default HeaderContainer;