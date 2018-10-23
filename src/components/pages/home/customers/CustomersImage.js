import React, { Component } from 'react';

const CustomersImage = props => {
    return (
        <div className='customers__type'>
            <div className='customers__circle'>
                <img src={require(`../../../../img/icons/${props.imageName}.png`)} alt="icon" className='customers__image' />
                <h3 className='customers__header'>{props.header}</h3>
            </div>
        </div>
    );
}

export default CustomersImage;