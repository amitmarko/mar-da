import React, { Component } from 'react';


class NavigationLogo extends Component {
    render() {
        return (
            <div className="navigation__logo">
                <img src={require('../../../img/icons8-staff-80.png')} alt="logo" className="navigation__image" />
            </div>
        )
    }
}

export default NavigationLogo;