import React, { Component } from 'react';

class NavigationList extends Component {

    scrollToContactUs = () =>{
        document.getElementById("contact-us").scrollIntoView({ behavior: 'smooth', block: 'end' })
    }


    renderList = className => {
        return (
            <div className={className}>
                <a href="#" className="navigation__item" onClick={this.scrollToContactUs}>
                    <span className="navigation__contectus"> צור קשר </span>
                </a>
                <a href="#" className="navigation__item">אודותינו</a>
                <a href="#" className="navigation__item">המלצות</a>
                <a href="#" className="navigation__item">השירותים שלנו</a>
                <a href="#" className="navigation__item">עמוד הבית</a>
            </div>
        )
    }


    render() {
        return (
            <div className="navigation__list-small">
                <input type="checkbox" className="navigation__checkbox-small" id='navi-toggle' />
                {this.renderList('navigation__background-small')}
                <label htmlFor="navi-toggle" className="navigation__button-small">
                    <span className="navigation__icon-small">
                        &nbsp;
                </span>
                </label>
            </div>
        )
    }
}

export default NavigationList;