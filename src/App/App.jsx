// src/App/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import  PrivateRoute  from '../_components/PrivateRoute'; // Corrigido para importar o named export
import { HomePage } from '../HomePage';
import { OcorrenciasPage } from '../OcorrenciasPage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import  AddOcorrenciaPage  from '../AddOcorrenciaPage/AddOcorrenciaPage';
import  EditOcorrenciaPage  from '../EditOcorrenciaPage/EditOcorrenciaPage';
import { DadosPessoaisPage } from '../DadosPessoaisPage/DadosPessoaisPage';
import { NotificacoesPage } from '../NotificacoesPage/NotificacoesPage';
import  ContatoPage  from '../ContatoPage/ContatoPage.jsx';
import  NoticiasPage  from '../NoticiasPage/NoticiasPage.jsx';
import  AddNoticiasPage  from '../AddNoticiasPage/AddNoticiasPage.jsx';
import  EditNoticiasPage  from '../EditNoticiasPage/EditNoticiasPage.jsx';

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
                        <Router>
                            <Routes>
                                <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
                                <Route path="/ocorrencias" element={<PrivateRoute element={<OcorrenciasPage />} />} />
                                <Route path="/dados-pessoais" element={<PrivateRoute element={<DadosPessoaisPage />} />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/register" element={<RegisterPage />} />
                                <Route path="/ocorrencias/add" element={<PrivateRoute element={<AddOcorrenciaPage />} />} />
                                <Route path="/notificacoes" element={<PrivateRoute element={<NotificacoesPage />} />} />
                                <Route path="/ocorrencias/edit/:id" element={<PrivateRoute element={<EditOcorrenciaPage />} />} />
                                <Route path="/fale-conosco" element={<PrivateRoute element={<ContatoPage />} />} />
                                <Route path="/noticias" element={<PrivateRoute element={<NoticiasPage />} />} />
                                <Route path="/noticias/add" element={<PrivateRoute element={<AddNoticiasPage />} />} />
                                <Route path="/noticias/edit/:id" element={<PrivateRoute element={<EditNoticiasPage />} />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </Routes>
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