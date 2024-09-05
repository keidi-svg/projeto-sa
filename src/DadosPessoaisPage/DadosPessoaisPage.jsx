import React from 'react';
import './DadosPessoaisPage.css';
import foto from '../assets/foto.jpeg';

class DadosPessoaisPage extends React.Component {
    render() {
        return (
            <div className="dados-pessoais-container">
                <div className="dados-pessoais-card">

                    <img src={foto} alt="Profile" className="profile-img" />
                    <h2>Daniel</h2>
                    <p>daniel_assuncao@estudante.sesisenai.org.br</p>

                    <div className="dados-pessoais-info">
                        <div className="info-item">
                            <span>Nome Completo do Responsável:</span>
                            <p>Fernanda Cristina do Santos</p>
                        </div>
                        <div className="info-item">
                            <span>Nome Completo do Estudante:</span>
                            <p>Daniel Maximiliano Vieira Assunção</p>
                        </div>
                        <div className="info-item">
                            <span>Número de Matrícula:</span>
                            <p>65498155747</p>
                        </div>
                    </div>

                    <button className="edit-button">Editar</button>

                    <div className="dados-pessoais-info">
                        <div className="info-item">
                            <span>Foto de perfil</span>
                            <a href="#">fazer upload</a>
                        </div>
                        <div className="info-item">
                            <span>Número de telefone</span>
                            <p>48-99613349</p>
                        </div>
                        <div className="info-item">
                            <span>E-mail</span>
                            <p>daniel_assuncao@estudante.sesisenai.org.br</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { DadosPessoaisPage };
