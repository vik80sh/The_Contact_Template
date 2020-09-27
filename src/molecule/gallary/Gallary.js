
import React, { Component } from 'react'
import Gallery from 'react-grid-gallery';

import { desktopView, mobileView } from './../../constant'
import './Gallary.scss'



export class Gallary extends Component {
    state = {
        imageArray : [...desktopView, ...mobileView]
    }
    componentDidMount() {
        this.timer = setInterval(()=>this.shuffle(this.state.imageArray), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    
    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
        this.setState({ imageArray: array })
    }
    render() {
        return (
            <div className="gallary-container">
               { this.state.imageArray.map(data => <img src={data} />)}
            </div>
        )
    }
}


