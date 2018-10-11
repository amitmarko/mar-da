import React, { Component } from 'react';
import FooterContentRight from './FooterContentRight';
import FooterContentLeft from './FooterContentLeft';


class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <img src={require('../../../img/icons8-staff-80.png')} alt="" className='footer__icon' />
                <div className='footer__content'>
                    <FooterContentLeft />
                    <FooterContentRight />
                </div>
            </footer>
        )
    }
}

export default Footer;