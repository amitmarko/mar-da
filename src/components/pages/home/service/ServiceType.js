import React, { Component } from 'react';
// import { withRouter, Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


const ServiceType = props => {
    const { serviceNumber } = props;
    return (
        <div className='service__type'>
            <Link
                to={{ pathname: '/ourService', hash: 'main', state: { serviceNumber } }}>
                <div className='service__box'>
                    <img src={require(`../../../../img/icons-white/${props.imageName}.png`)} alt="icon" className='service__image' />
                    <h3 className='service__header'>{props.header}</h3>
                </div>
            </Link>
        </div>
    );
}

export default ServiceType;