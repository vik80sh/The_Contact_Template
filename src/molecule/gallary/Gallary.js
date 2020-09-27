
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
    previewImage = (index) => {
        console.log(gallaryImageSet[index])
        this.setState({ image: gallaryImageSet[index], isOpen: true })
    }
    closeAnywhere = () => {
        if (this.state.isOpen)
            this.setState({ isOpen: false })
    }
    render() {
        return (
            <div className="gallery-box" style={{ backgroundImage: `url(${this.state.image.src})` }} onClick={this.closeAnywhere}>
                {!this.state.isOpen && <div className="gallary-container">
                    <Gallery photos={gallaryImageSet } onClick={(e, { index }) => this.previewImage(index)} />
                </div>}
                {this.state.isOpen && <div className="image-preview-parent">
                    <span className="close-btn" onClick={() => this.setState({ isOpen: false })} >X</span>
                    <div className="image-preview">
                        <img src={this.state.image.src} alt="previewimage" />
                    </div>
                </div>}
            </div>
        )
    }
}


