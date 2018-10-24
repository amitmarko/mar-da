import React, { Component } from 'react';
const ServiceType = props => {
    return (
        <div className='service__type'>
            <div className='service__box'>
                <img src={require(`../../../../img/icons/${props.imageName}.png`)} alt="icon" className='service__image' />
                <h3 className='service__header'>{props.header}</h3>
            </div>
        </div>
    );
}

export default ServiceType;