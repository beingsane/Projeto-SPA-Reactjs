import React, { Component } from 'react';
import InputMask from 'react-input-mask';


export default class Contact extends Component {

    render() {
        return(
            <div className="formulario" id="contact">
                <h1>Fale Conosco</h1>
                <form name="form1" id="form1" method="POST" action="/Controllers/controllerform.php">
                    <input type="text" name="nome" id="nome" placeholder="* Nome" />
                    <InputMask type="tel" name="telefone" id="telefone" placeholder="* Telefone" mask="(99) 99999-9999" />
                    <input type="email" name="email" id="email" placeholder="* E-mail" />
                    <textarea name="mensagem" id="mensagem" placeholder="* Mensagem"></textarea>
                    <br/>
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}