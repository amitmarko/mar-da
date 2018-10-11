import React, { Component } from 'react';

class NavigationListBig extends Component {

    scrollToContactUs = () =>{
        document.querySelector("#contact-us").scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        return (
            <div className='navigation__list'>
                <a href="#ContactUs" className="navigation__item" onClick={this.scrollToContactUs}>
                    <span className="navigation__contectus"> צור קשר </span>
                </a>
                <a href="#" className="navigation__item">אודותינו</a>
                <a href="#" className="navigation__item">המלצות</a>
                <a href="#" className="navigation__item">השירותים שלנו</a>
                <a href="#" className="navigation__item">עמוד הבית</a>
            </div>

        )
    }
}

export default NavigationListBig;