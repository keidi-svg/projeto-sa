import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { OcorrenciasPage } from '../OcorrenciasPage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { AddOcorrenciaPage } from '../AddOcorrenciaPage/AddOcorrenciaPage';
import { EditOcorrenciaPage } from '../EditOcorrenciaPage/EditOcorrenciaPage';
import { DadosPessoaisPage } from '../DadosPessoaisPage/DadosPessoaisPage';
import { NotificacoesPage } from '../NotificacoesPage/NotificacoesPage';
import ContatoPage from '../ContatoPage/ContatoPage.jsx';
import NoticiasPage from '../NoticiasPage/NoticiasPage.jsx';
import AddNoticiasPage from '../AddNoticiasPage/AddNoticiasPage.jsx';
import EditNoticiasPage from '../EditNoticiasPage/EditNoticiasPage.jsx';

// Dentro da definição das rotas

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <PrivateRoute path="/ocorrencias" component={OcorrenciasPage} /> 
                                <PrivateRoute path="/dados-pessoais" component={DadosPessoaisPage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <PrivateRoute path="/ocorrencias/add" component={AddOcorrenciaPage} />
                                <PrivateRoute path="/notificacoes" component={NotificacoesPage} />
                                <PrivateRoute path="/ocorrencias/edit/:id" component={EditOcorrenciaPage} />
                                <PrivateRoute path="/fale-conosco" component={ContatoPage} />
                                <PrivateRoute path="/noticias" component={NoticiasPage} />
                                <PrivateRoute path="/noticias/add" component={AddNoticiasPage} />
                                <PrivateRoute path="/noticias/edit/:id" component={EditNoticiasPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };