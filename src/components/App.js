import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class App extends Component {

    render() {
        return(
            <div className="header">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}