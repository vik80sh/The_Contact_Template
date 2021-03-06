import React, { Component } from 'react'
import Slider from "react-slick";
import { desktopView, mobileView } from './../../constant';

import './Home.scss';
import { Hexagon } from './../../molecule/hexagon/Hexagon';

import { Gallary } from './../../molecule/gallary/Gallary';
import { ContactMe } from '../../molecule/conactMe/contact';
export default class Home extends Component {
    state = {
        imageArray: desktopView
    }
    componentDidMount() {
        if (window.screen.width < 720)
            this.setState({ imageArray: mobileView })
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
                        return <div className="hero-conatainer" key={i}>
                            <div className="background-imageX"
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
                <div className="middle-page">


                    {/* <div className="design-box">
                        <Hexagon />
                        <Hexagon />
                        <Hexagon />
                    </div> */}
                    <div className="shop-tagline">
                        <p className="shop-title">THE PHOTO SHOP</p>
                        <p className="shop-subtitle">We Make Your Best Moments Memorable Forever</p>
                    </div>
                    <ContactMe/>
                </div>
                <Gallary />
            </div>
        );
    }
}
