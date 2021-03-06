import React, { Component } from 'react';
import Navigation from '../../layout/navigation/Navigation';
import Header from '../../layout/header/Header';
import Service from './service/Service';
import About from './about/About';
import ContactUs from '../../layout/contact_us/ContactUs'
import Customers from './customers/Customers'
import Footer from '../../layout/footer/Footer';
import ContactBtn from '../../layout/contactBtn/contactBtn';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Navigation page='home' />
                <Header page='home'/>
                <main>
                    <ContactBtn />
                    <About />
                    <Service />
                    <Customers />
                    <ContactUs />
                </main>
                <Footer />
            </div>
        )
    }
}

export default Home;