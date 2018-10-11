import React, { Component } from 'react';

class FooterContentRight extends Component {
    render() {
        return (
            <div className='footer__content-right rtl'>
                כל הזכויות שמורות &copy; למרקוביץ' דהן ושות' .
                <span>
                    האתר נבנה ועוצב ע"י <span className='footer__content-right__copywrite'>עמית מרקוביץ'.</span> 
                </span>
            </div>
        )
    }
}

export default FooterContentRight;