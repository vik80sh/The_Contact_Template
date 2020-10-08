import React, { Component } from 'react'
import { productList } from './../../constant';
import tps from './../../asserts/images/tpshop.jpeg';
import './product.scss';

export default class ProductList extends Component {
    render() {
        return (
            <div className="row product-wrapper">
                <div className="Hero-image">
                    <img src={tps} alt="the-photo-shop"/>
                </div>
                {productList.map((data, i) => {
                    return <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch product">
                        <img src={data} alt="product-list"/>
                    </div>
                })}
            </div>
        )
    }
}

