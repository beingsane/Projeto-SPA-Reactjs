import React, { Component } from 'react';

import Header from './Header';


export default class Erro extends Component {

    render() {
        return(
            <div>
                <Header />
                ERROR: Página não encontrada.
            </div>
        );
    }
}