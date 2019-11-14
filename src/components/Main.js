import React, { Component } from 'react'

import Slide from './main/Slide';
import Information from './main/Information';
import Maps from './main/Maps';
import Contact from './main/Contact';


export default class Main extends Component{

    render() {
        return(
            <div className="main">
                <Slide />
                <Information />
                <Maps />
                <Contact />
            </div>
        );
    }
}