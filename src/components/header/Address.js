import React, { Component } from 'react';

export default class Address extends Component {

    render() {
        return(
            <div className="address">
                <picture>
                <source media="(max-width: 768px)" srcSet="/img/contact-s.png" />
                <img src="/img/contact.png" alt="whatsapp" /> <strong> (xx) x xxxx-xxxx</strong> <br/>
                </picture>
                Endereço <br/>
                <strong>R$ 1.200,00</strong>
            </div>
        );
    }
}