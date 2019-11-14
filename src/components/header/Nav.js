import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default class Nav extends Component {

    render() {
        return(
            <div className="nav">
                <AnchorLink href='#home'>Home</AnchorLink>
                <AnchorLink href='#photo'>Fotos</AnchorLink>
                <AnchorLink href='#information'>Informações</AnchorLink>
                <AnchorLink href='#contact'>Contato</AnchorLink>
            </div>
        );
    }
}