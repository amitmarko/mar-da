import React, { Component } from 'react';
import OurServicesData from '../../../../utilities/OurServicesData';

class ServiceItem extends Component {
    state = {}

    componentDidUpdate = (prevProps) => {
        if (this.props.serviceShow !== prevProps.serviceShow) {

        }
    }

    render() {
        const { serviceShow } = this.props;
        return (
            <div className='service_items'>
                <h2 className='service_items__header'>
                    {OurServicesData[serviceShow].header}
                </h2>

                <p className='service_items__description rtl'>
                    {OurServicesData[serviceShow].description}
                </p>

                <div className='composition'>
                    <img src={require('../../../../img/rawpixel-620230-unsplash.jpg')} alt="" className="composition__photo composition__photo--p1"></img>
                    <img src={require('../../../../img/rawpixel-670711-unsplash.jpg')} alt="" className="composition__photo composition__photo--p2"></img>
                    <img src={require('../../../../img/rawpixel-752421-unsplash.jpg')} className="composition__photo composition__photo--p3"></img>
                </div>

            </div>
        );
    }
}

export default ServiceItem;
