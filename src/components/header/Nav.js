import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 5e207e062d6cfbd9854dd6e2a6ae005324e25adc
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default class Nav extends Component {

    render() {
        return(
            <div className="nav">
<<<<<<< HEAD
                <Link to="/">Home</Link>
                <AnchorLink href='#mapa'>Mapa</AnchorLink>
=======
                <AnchorLink href='#home'>Home</AnchorLink>
                <AnchorLink href='#photo'>Fotos</AnchorLink>
>>>>>>> 5e207e062d6cfbd9854dd6e2a6ae005324e25adc
                <AnchorLink href='#information'>Informações</AnchorLink>
                <AnchorLink href='#contact'>Contato</AnchorLink>
            </div>
        );
    }
}