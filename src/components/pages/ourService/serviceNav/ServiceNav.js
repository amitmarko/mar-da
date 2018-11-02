import React, { Component } from 'react';
import OurServicesData from '../../../../utilities/OurServicesData';

class ServiceNav extends React.Component {
    state = {
        colors: [
            'black',
            'black',
            'black',
            'black',
            'black',
            'black',
            'black',
            'black',
        ]
    }

    componentDidMount = () => {
        const colors = this.state.colors;
        if (this.props.initServiceClicked)
            colors[this.props.initServiceClicked] = `var(--color-primary)`;
        else colors[0] = `var(--color-primary)`;
        this.setState({ colors })
    }

    serviceCliked = (key) => {
        const colors = this.state.colors.map(() => {
            return 'black';
        })
        colors[key] = 'var(--color-primary)';
        this.setState({ colors });
        this.props.serviceCliked(key)
    }

    renderList = (header, key) => {
        console.log(this.state.colors[key]);
        return (
            <li
                className='service_nav__item'
                key={key}
                style={{ color: this.state.colors[key] }}
                onClick={() => this.serviceCliked(key)}>
                {header}
            </li>
        );
    }

    render() {
        return (
            <div className='service_nav'>
                <ul className='service_nav__list'>
                    {OurServicesData.map(({ header }, key) => this.renderList(header, key))}
                </ul>
            </div>
        );
    }
}


export default ServiceNav;