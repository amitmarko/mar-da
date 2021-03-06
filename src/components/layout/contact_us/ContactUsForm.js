import React, { Component } from 'react';

class ContactUsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: '',
        };
    }

    submitForm = () => {
        const { name, phone, email, message } = this.state;
        alert('Submit')
    }

    render() {
        const { name, phone, email, message } = this.state;
        return (
            <form className='form' action='https://formspree.io/amitmarkovich92@gmail.com' method="POST">

                <div className="form__group" >
                    <input type="text" id='name' className="form__input rtl" placeholder="שם מלא" required value={name} onChange={event => this.setState({ name: event.target.value })} name='name' />
                    <label htmlFor="name" className="form__label rtl">שם מלא</label>
                </div>

                <div className="form__group">
                    <input type="phone" id='phone' className="form__input rtl" placeholder="טלפון" required value={phone} onChange={event => this.setState({ phone: event.target.value })} name='phone' />
                    <label htmlFor="phone" className="form__label rtl">טלפון</label>
                </div>

                <div className="form__group">
                    <input type="email" id='email' className="form__input rtl" placeholder='דוא"ל' required value={email} onChange={event => this.setState({ email: event.target.value })} name='email' />
                    <label htmlFor="email" className="form__label rtl">דוא"ל</label>
                </div>

                <div className="form__group">
                    <textarea name="message" id="message" className='form__textarea rtl' placeholder='הודעה' value={message} onChange={event => this.setState({ message: event.target.value })} name='meesage' ></textarea>
                </div>

                <div className="from-group">
                    <button type='submit' className="btn btn-primary rtl">שלח</button>
                    {/* <input type="submit" class="btn btn-primary rtl" value="שלח" /> */}
                </div>

            </form>
        )
    }
}

export default ContactUsForm;