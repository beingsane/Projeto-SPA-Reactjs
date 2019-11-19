import React, { Component } from 'react';
<<<<<<< HEAD
import InputMask from 'react-input-mask';

=======
>>>>>>> 5e207e062d6cfbd9854dd6e2a6ae005324e25adc

export default class Contact extends Component {

    render() {
        return(
<<<<<<< HEAD
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
=======
            <div>
                
>>>>>>> 5e207e062d6cfbd9854dd6e2a6ae005324e25adc
            </div>
        );
    }
}