import React, { Component } from 'react';

class ContactUsDetails extends Component {
    render() {
        return (
            <div className='details'>

                <ul className='details__list'>

                    <li className='details__item'>
                        <img src={require('../../../img/address-icon.png')} className='details__item-icon' />
                        <span className='details__item-info rtl'>ברנר 18/4 נתניה 4244122</span>
                    </li>


                    <li className='details__item'>
                        <img src={require('../../../img/icons8-phone-50.png')} className='details__item-icon' />
                        <span className='details__item-info'>04-6342618</span>
                    </li>

                    <li className='details__item'>
                        <img src={require('../../../img/email-icon.png')} className='details__item-icon' />
                        <span className='details__item-info'>zvikamar@gmail.com</span>
                    </li>

                      <li className='details__item'>
                        <img src={require('../../../img/hours-icon.png')} className='details__item-icon' />
                        <span className='details__item-info'>09:00 - 18:00</span>
                    </li>


                </ul>

            </div>
        )
    }
}

export default ContactUsDetails;