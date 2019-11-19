import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
<<<<<<< HEAD
import Contato from './components/Contato';
import Erro from './components/ErroPagina';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/contato" component={Contato} />
            <Route path="*" component={Erro} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root'));
=======

ReactDOM.render(<App/>, document.getElementById('root'));
>>>>>>> 5e207e062d6cfbd9854dd6e2a6ae005324e25adc

