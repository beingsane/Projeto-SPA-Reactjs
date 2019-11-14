import React, { Component } from 'react';

export default class ButtonMob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visNave: 'flex',
        }

        this.clickMe = this.clickMe.bind(this)
    }

    clickMe = () => {
        if (this.state.visNave === 'flex') {
            this.setState({ visNave: 'none' });
        } else {  
        this.setState({ visNave: 'flex' })
    }
    document.querySelector(".nav").style.display = this.state.visNave;
}

    render() {
        return(
            <div className="buttonMob" onClick={this.clickMe} >
                <img src="/img/botao.png" alt="Botão Mobile" />
            </div>
        );
    }
}