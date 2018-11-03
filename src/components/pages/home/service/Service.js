import React, { Component } from 'react';
import ServiceType from './ServiceType';
import OurServicesData from '../../../../utilities/OurServicesData';

class Service extends Component {

    renderServiceType = (data, key) => {
        return (
            <ServiceType {...data} key={key} serviceNumber={key} />
        );
    }

    render() {
        return (
            <section className='section-service'>
                <div className='section-service__header'>
                    <h2 className="heading-secondary heading-secondary-grey u-margin-bottom-medium u-padding-top-small">
                        השירותים שלנו
                </h2>
                </div>
                <div className='service'>
                    {OurServicesData.map(({ header, imageName }, key) => this.renderServiceType({ header, imageName }, key))}
                </div>

            </section>
        )
    }
}

export default Service;