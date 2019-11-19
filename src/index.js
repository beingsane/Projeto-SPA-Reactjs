import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
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

