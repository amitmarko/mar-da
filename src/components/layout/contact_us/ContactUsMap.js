import React, { Component } from 'react';
const GOOGLE_API = 'AIzaSyDrhr4LqHqh43ZtS5AJM-OFLSdwe9RnTJY';

class ContactUsMap extends Component {
    render() {
        return (
            <div className='map'>
                <iframe
                    frameborder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API}
                      &q=Herzl+St+16,hadera+israel`}
                    allowfullscreen>
                </iframe>
            </div>
        )
    }
}

export default ContactUsMap;