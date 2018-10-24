import React, { Component } from 'react';
import ServiceType from './ServiceType';

class Service extends Component {
    render() {
        return (
            <section className='section-service'>
                <div className='section-service__header'>
                    <h2 className="heading-secondary-shadow__black u-margin-bottom-medium u-padding-top-small">
                        השירותים שלנו
                </h2>
                </div>
                <div className='service'>
                    <ServiceType imageName='icons8-coins-50-dark' header='הנהלת חשבונות ושכר' />
                    <ServiceType imageName='icons8-business-50-dark' header='פתיחת תיק עוסק מורשה' />
                    <ServiceType imageName='icons8-note-50-dark' header='פתיחת תיק עוסק פטור' />
                    <ServiceType imageName='icons8-report-card-50-dark' header='ביקורת דוחות כספיים' />
                    <ServiceType imageName='icons8-combo-chart-50-dark' header='דוחות שנתיים והצהרות הון' />
                    <ServiceType imageName='icons8-protect-50-dark' header='החזרי מס' />
                    <ServiceType imageName='icons8-search-50-dark' header='יעוץ מס' />
                    <ServiceType imageName='icons8-workspace-50' header='חוו"ד מומחה לבית משפט' />
                </div>

            </section>
        )
    }
}

export default Service;