import React, { Component } from 'react';


class NavigationContent extends Component {
    render() {
        return (
            <div className="navigation__content">
                <div className="navigation__content-buzz">
                    <img src={require('../../../img/icons8-phone-50.png')} alt="phone" className="navigation__phone-icon" />
                    <p className="navigation__phone">
                        לפגישת התייעצות
                      <span>04-6342618</span>
                    </p>
                </div>
            </div>

        )
    }
}

export default NavigationContent;