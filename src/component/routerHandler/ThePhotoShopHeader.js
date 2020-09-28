
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import RouterHandler from './RouterHandler';

import './ThePhotoShopHeader.scss';
import { ThePhotoShopFooter } from '../footer/footer';

export default class ThePhotoShopHeader extends Component {
    hideToggle = () => {
        let selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    render() {
        return (
            <main className="header-wrapper">
                <Layout>
                    <Header className="header-color" title="The Photo Shop" scroll>
                        <Navigation className="text-uppercase">
                            <NavLink to="/" activeClassName="activeRoute"
                                exact={true}>Home </NavLink >
                            <NavLink to="/resume" activeClassName="activeRoute"
                                exact={true}>Our Store</NavLink >
                            <NavLink to="/projects" activeClassName="activeRoute"
                                exact={true}>Porfolio</NavLink >
                            <NavLink to="/contact" activeClassName="activeRoute"
                                exact={true} >Contact</NavLink >
                        </Navigation>
                    </Header>
                    <Drawer title="The Photo Shop"  >
                        <Navigation onClick={() => this.hideToggle()}>
                            <NavLink to="/" activeClassName="activeRoute"
                                exact={true}>Home </NavLink >
                            <NavLink to="/resume" activeClassName="activeRoute"
                                exact={true}>Our Store</NavLink >
                            <NavLink to="/projects" activeClassName="activeRoute"
                                exact={true}>Porfolio</NavLink >
                            <NavLink to="/contact" activeClassName="activeRoute"
                                exact={true} >Contact</NavLink >
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <RouterHandler />
                        <ThePhotoShopFooter />
                    </Content>

                </Layout>
            </main>
        )
    }
}
