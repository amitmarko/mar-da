import React, { Component } from 'react';

class ContactUsDetails extends Component {
    render() {
        return (
            <div className='details'>

                <ul className='details__list'>

                    <li className='details__item'>
                        <img src={require('../../../img/address-icon.png')} className='details__item-icon' />
                        <span className='details__item-info rtl'>הרצל 8 חדרה</span>
                    </li>

                    <li className='details__item'>
                        <img src={require('../../../img/icons8-phone-50.png')} className='details__item-icon' />
                        <span className='details__item-info'>04 - 6342618</span>
                    </li>

                    <li className='details__item'>
                        <img src={require('../../../img/icons8-fax-50.png')} className='details__item-icon' />
                        <span className='details__item-info'>04 - 6626724</span>
                    </li>

                    <li className='details__item'>
                        <img src={require('../../../img/email-icon.png')} className='details__item-icon' />
                        <span className='details__item-info'>madah@bezeqint.net</span>
                    </li>

                    <li className='details__item'>
                        <img src={require('../../../img/hours-icon.png')} className='details__item-icon' />
                        <span className='details__item-info rtl'>
                            ימים א' - ה'
                            <br />
                            08:00 - 17:00
                        </span>
                    </li>


                </ul>

            </div>
        )
    }
}

export default ContactUsDetails;