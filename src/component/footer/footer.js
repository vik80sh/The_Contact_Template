import React from 'react';
import { ContactMe } from '../../molecule/conactMe/contact';
import './footer.scss'

export const ThePhotoShopFooter = () => {
    return (<div className="footer-wrapper">
        <div className="title">
            <small>Studio Arth</small>
            <h4>The Photo Shop</h4>
            <small className="subtitle">Where The Best Cost Less</small>
            <div className="about-me">
                Because every picture has a story to tell, We specialize in wedding and 
                events photography, Please conact us By phone, WhatsApp, Email or Visit our Shop 
            </div>
        </div>
        <div className="conact-us">
            <ContactMe />
            <p>Conact us</p>
        </div>
        <div className="address">
            <div>A-8 Shanti Complex, Near Kedarnaath Market</div>
            <div>G.B. Road, Gaya-823001 (Bihar)</div>
            <div>08757286551</div>
        </div>
    </div>
    )
}