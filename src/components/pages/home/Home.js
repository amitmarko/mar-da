import React, { Component } from 'react';
import Navigation from '../../layout/navigation/Navigation';
import Header from '../../layout/header/Header';
import OurService from './our_service/OurService';
import About from './about/About';
import ContactUs from '../../layout/contact_us/ContactUs'
import Footer from '../../layout/footer/Footer'

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Navigation />
                <Header />
                <main>
                    <About />
                    <OurService />
                    <ContactUs />
                </main>
                <Footer />
            </div>
        )
    }
}

export default Home;