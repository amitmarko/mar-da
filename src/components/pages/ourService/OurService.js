import React, { Component } from 'react';
import Navigation from '../../layout/navigation/Navigation';
import Header from '../../layout/header/Header';
import ContactBtn from '../../layout/contactBtn/contactBtn';
import Footer from '../../layout/footer/Footer';
import ContactUs from '../../layout/contact_us/ContactUs';
import ServiceMain from './serviceMain/ServiceMain';

class OurService extends Component {
    state = {}
    render() {
        let serviceNumber = 0;
        if (this.props.location && this.props.location.state && this.props.location.state.serviceNumber)
            serviceNumber = this.props.location.state.serviceNumber
        return (
            <div className='our_service'>
                <Navigation page='ourService' />
                <Header image='image-2'/>
                <main>
                    <ContactBtn />
                    <ServiceMain serviceNumber={serviceNumber} />
                    <ContactUs />
                </main>
                <Footer />
            </div>
        );
    }
}

export default OurService;