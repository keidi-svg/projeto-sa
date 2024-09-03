import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage-container">
                <header>
                    <h1>Bem-Vindo</h1>
                    <p>ao Espaço de Ocorrências <br/> SESI SENAI</p>
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
        );
    }
}

const connectedHomePage = connect()(HomePage);
export { connectedHomePage as HomePage };
