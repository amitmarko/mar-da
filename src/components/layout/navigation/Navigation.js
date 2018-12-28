import React, { Component } from 'react';
import NavigationContent from './NavigationContent'
import NavigationList from './NavigationList'
import NavigationLogo from './NavigationLogo'
import NavigationBtn from './NavigationBtn';

class Navigation extends React.Component {

    state = {
        menuClick: false,
        btnPosition: '',
        iconChange: '',
    }

    navClick = () => {
        this.setState({ btnPosition: '' });
        this.setState({ iconChange: '' });
    }

    render() {
        const { props, state } = this;
        return (
            <nav className='navigation'>
                <NavigationContent />
                <NavigationList page={props.page} menuClick={state.menuClick} navClick={this.navClick} />
                <NavigationBtn menuClick={menuClick => this.setState({ menuClick })} />
                <NavigationLogo />
            </nav>
        )
    }
}

export default Navigation;