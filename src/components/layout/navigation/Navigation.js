import React, { Component } from 'react';
import NavigationContent from './NavigationContent'
import NavigationListSmall from './NavigationListSmall'
import NavigationListBig from './NavigationListBig'
import NavigationLogo from './NavigationLogo'

class Navigation extends Component {
    render() {
        return (
            <nav className='navigation'>
                <NavigationContent />
                <NavigationListBig />
                <NavigationListSmall />
                <NavigationLogo />
            </nav>
        )
    }
}

export default Navigation;