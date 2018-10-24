import React, { Component } from 'react';
const GOOGLE_API = 'AIzaSyDrhr4LqHqh43ZtS5AJM-OFLSdwe9RnTJY';

class ContactUsMap extends Component {
    render() {
        return (
            <div className='map'>
                <iframe
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API}
                      &q=Herzl+St+8,hadera+israel`}
                    allowFullScreen>
                </iframe>
            </div>
        )
    }
}

export default ContactUsMap;