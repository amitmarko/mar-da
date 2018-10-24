import React, { Component } from 'react';
import CustomersImage from './CustomersImage';


class Customers extends Component {
    state = {}
    render() {
        return (
            <section className='section-customers'>
                <h2 className="heading-secondary-shadow__white u-padding-bottom-medium u-padding-top-small">
                    סוגי לקוחות
               </h2>
                <div className='customers'>
                    <CustomersImage imageName='icons8-statistics-50' header='חברות' />
                    <CustomersImage imageName='icons8-apartment-50' header='נדלן' />
                    <CustomersImage imageName='icons8-laptop-50' header='הייטק' />
                    <CustomersImage imageName='icons8-training-50' header='ייבוא ויצוא' />
                    <CustomersImage imageName='icons8-diamond-50' header='יהלומים' />
                    <CustomersImage imageName='icons8-connectivity-and-help-50' header='עמותות ומלכר"ים' />
                    <CustomersImage imageName='icons8-food-50' header='מזון' />
                    <CustomersImage imageName='icons8-clothes-50' header='ביגוד' />
                    <CustomersImage imageName='icons8-user-groups-50' header='מקצועות חופשיים' />
                    <CustomersImage imageName='icons8-real-estate-50' header='ועדי בית' />
                </div>
            </section>
        );
    }
}

export default Customers; 