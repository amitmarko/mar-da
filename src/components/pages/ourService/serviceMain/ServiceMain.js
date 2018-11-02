import React, { Component } from 'react';
import ServiceNav from '../serviceNav/ServiceNav';
import ServiceItem from '../serviceItem/ServiceItem';

class ServiceMain extends Component {
    state = {
        serviceShow: this.props.serviceNumber,
    }

    serviceCliked = serviceShow => {
        this.setState({ serviceShow });
    }

    render() {
        return (
            <section className='section-our-service' id='main'>
                <div className='section-service__header'>
                    <h2 className="heading-secondary-color__primary u-margin-bottom-medium u-padding-top-small">
                        השירותים שלנו
                    </h2>
                </div>
                <div className='our-service-main'>
                    <ServiceItem serviceShow={this.state.serviceShow} />
                    <ServiceNav serviceCliked={this.serviceCliked} initServiceClicked={this.props.serviceNumber} />
                </div>
            </section>
        );
    }
}

export default ServiceMain;