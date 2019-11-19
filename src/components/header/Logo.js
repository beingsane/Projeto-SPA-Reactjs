import React, { Component } from 'react';

export default class Logo extends Component {

    render() {
        return(
            <div className="logo">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/logo-s.png" />
                    <source media="(min-width: 769px)" srcSet="/img/logo.png" />
                    <img src="/img/logo.png" alt="Logomarca da Locadora" />
                </picture>
            </div>
        );
    }
}