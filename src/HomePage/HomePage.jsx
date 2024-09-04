// HomePage.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../_components/Layout/Layout.jsx';
import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <Layout>
                <header>
                    <h1>Bem-Vindo</h1>
                    <p>ao Espaço de Ocorrências <br /> SESI SENAI</p>
                </header>
                <div className="menu-buttons">
                    <Link to="/dados-pessoais" className="menu-button">
                        Dados Pessoais
                    </Link>
                    <Link to="/ocorrencias" className="menu-button">
                        Ocorrências
                    </Link>
                    <Link to="/quadro-horario" className="menu-button">
                        Quadro de Horário
                    </Link>
                    <Link to="/fale-conosco" className="menu-button">
                        Fale Conosco
                    </Link>
                </div>
            </Layout>
        );
    }
}

const connectedHomePage = connect()(HomePage);
export { connectedHomePage as HomePage };
