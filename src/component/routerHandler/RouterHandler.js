import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom';
import Home from '../home/Home';

export default class RouterHandler extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>

        )
    }
}
