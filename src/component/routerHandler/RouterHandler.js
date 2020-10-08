import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
import ProductList from '../product/product';

export default class RouterHandler extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/catalogs" exact component={ProductList} />

            </Switch>

        )
    }
}
