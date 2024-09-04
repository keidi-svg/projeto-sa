// HomePage.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from '../_components/Sidebar/Sidebar.jsx';
import './HomePage.css'; // Adicione um arquivo CSS separado para estilos específicos

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage-container">
                <Sidebar /> {/* Adicione o componente Sidebar */}
                <div className="main-content">
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
                    <footer>
                        <Link to="/" className="footer-icon">
                            <i className="fa fa-home"></i>
                        </Link>
                        <Link to="/notificacoes" className="footer-icon">
                            <i className="fa fa-bell"></i>
                        </Link>
                        <Link to="/noticias" className="footer-icon">
                            Notícias
                        </Link>
                    </footer>
                </div>
            </div>
        );
    }
}

const connectedHomePage = connect()(HomePage);
export { connectedHomePage as HomePage };
