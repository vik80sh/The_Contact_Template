
import React, { Component } from 'react'
// import Gallery from 'react-grid-gallery';
import Gallery from 'react-photo-gallery';



import { gallaryImageSet } from './../../constant'
import './Gallary.scss'



export class Gallary extends Component {
    state = {
        isOpen: false,
        image: ""
    }

    render() {
        return (
            <div className="gallery-box">
                <div className="gallary-container">
                    <Gallery photos={gallaryImageSet} />
                </div>
            </div>
        )
    }
}


