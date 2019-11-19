import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return(
            <div className="footer"> 
                <div>
                    <img src="/img/logo-s.png" alt="logomarca Locahouse"/>
                </div>
                <div>
                    Endereço <br/>
                    Telefone <br/>
                    Email 
                </div>
            </div>
        );
    }
}