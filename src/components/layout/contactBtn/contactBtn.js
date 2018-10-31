import React, { Component } from 'react';

const ContactBtn = () => {
    return (
        <div className='ContactBtn' onClick={scrollToContactUs}>
               <h3>צור קשר</h3>
        </div>
    );
}

 const scrollToContactUs = () =>{
    document.querySelector("#contact-us").scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default ContactBtn;