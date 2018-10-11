import React, { Component } from 'react';
import ContactUsForm from './ContactUsForm';
import ContactUsDetails from './ContactUsDetails';
import ContactUsMap from './ContactUsMap'

class ContactUs extends Component {
    render() {
        return (
            <section className='section-contact-us' id='contact-us'>

                <h2 className='heading-secondary u-maring-bottom-medium'>
                    צור קשר
                </h2>

                <div className='section-contact-us__content'>
                    <div className='details-form-box'>
                        <ContactUsDetails />
                        <ContactUsForm />
                    </div>
                    <ContactUsMap />
                </div>

            </section>
        )
    }
}

export default ContactUs;