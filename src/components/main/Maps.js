import React, { Component } from 'react';

export default class Maps extends Component {

    render() {
        return(
            <div className="mapsImovel" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295.7395535399097!2d-38.03894414771948!3d-4.223909756477505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b88b735f1ea7e5%3A0xd2aa0092ecd594c1!2sUrua%C3%BA%2C%20Beberibe%20-%20CE%2C%2062840-000!5e0!3m2!1spt-BR!2sbr!4v1574163901902!5m2!1spt-BR!2sbr" allowfullscreen="" id="mapa"></iframe>
            </div>
        );
    }
}