import React from 'react';

import contact from './../../asserts/icons/contact1.png'
import whatsApp from './../../asserts/icons/whatsapp.png'
import email from './../../asserts/icons/email-icon.png'

import './contact.scss';

export const ContactMe = () => {
    return <div className="conact-me">
        <a href="tel:+918298155551" class="phone-dial"><img src={contact} alt="phone" /></a>
        <a href="https://wa.me/+918298155551" class="whatsapp"><img src={whatsApp} alt="phone" /></a>
        <a href="mailto: ajitktps@gmail.com" class="email"><img src={email} alt="phone" /></a>
    </div>
}
