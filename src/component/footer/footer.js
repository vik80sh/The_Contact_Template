import React from 'react';
import { ContactMe } from '../../molecule/conactMe/contact';
import './footer.scss'

export const ThePhotoShopFooter = () => {
    return (<div className="footer-wrapper">
        <div className="title">
            <h4>Studio Arth</h4>
            <h6>The Photo Shop</h6>
            <div className="about-me">
                Because every picture has a story to tell, We specialize in wedding and 
                events photography, Please conact us By phone, WhatsApp, Email or Visit our Store.
            </div>
        </div>
        <div className="conact-us">
            <ContactMe />
            <p>Contact us</p>
        </div>
        <div className="address">
            <div>A-8 Shanti Complex, Near Kedarnaath Market</div>
            <div>G.B. Road, Gaya-823001 (Bihar)</div>
            <div>08757286551, +918298155551</div>
        </div>
    </div>
    )
}