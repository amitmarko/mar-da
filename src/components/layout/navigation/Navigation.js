import React, { Component } from 'react';
import NavigationContent from './NavigationContent'
import NavigationListSmall from './NavigationListSmall'
import NavigationListBig from './NavigationListBig'
import NavigationLogo from './NavigationLogo'

const Navigation = (props) => {
    return (
        <nav className='navigation'>
            <NavigationContent />
            <NavigationListBig page={props.page} />
            <NavigationListSmall />
            <NavigationLogo />
        </nav>
    )
}

export default Navigation;