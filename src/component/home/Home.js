import React, { Component } from 'react'
import Slider from "react-slick";
import { desktopView, mobileView } from './../gallary/Image';

import './Home.scss';

export default class Home extends Component {
    state = {
        imageArray: desktopView
    }
    componentDidMount() {
        if (window.screen.width < 720)
            this.setState({ imageArray: mobileView })
    }
    polygon = () => {
        return <div className="hexagon">
                   <div className="inner-design">
                        How You Doing ? :)
                   </div>
                </div>
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
        };
        return (
            <div className="home-wrapper">
                <Slider {...settings}>
                    {this.state.imageArray.map((data, i) => {
                        return <div className="hero-conatainer">
                            <div className="background-imageX" key={i}
                                style={{
                                    backgroundImage: `url(${data})`
                                }}>
                                {i % 2 === 0 ? <div className="text-container">
                                    <p className="text1">CANDID PHOTOGRAPHY</p>
                                    <p className="text2">CINEMATOGRAPHY</p>
                                    <p className="text3">PORTFOLIO SHOOT</p>
                                </div> :
                                    <div className="text-container">
                                        <p className="text1">PRE WEDDING SHOOT</p>
                                        <p className="text2">DESTINATION WEDDING</p>
                                        <p className="text3">WEDDING COVERAGE</p>
                                    </div>}
                            </div>
                        </div>
                    })}
                </Slider>
                <div className="design-box">
                    {this.polygon()}
                    {this.polygon()}
                    {this.polygon()}
                </div>

            </div>
        );
    }
}
