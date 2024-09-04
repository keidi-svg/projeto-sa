// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? 'Fechar' : 'Abrir'}
            </button>
            <nav className="sidebar-menu">
                <Link to="/dados-pessoais" className="menu-item">Dados Pessoais</Link>
                <Link to="/ocorrencias" className="menu-item">Ocorrências</Link>
                <Link to="/noticias" className="menu-item">Notícias</Link>
                <Link to="/notificacoes" className="menu-item">Notificações</Link>
                <Link to="/fale-conosco" className="menu-item">Fale Conosco</Link>
                <Link to="/quadro-horario" className="menu-item">Quadro de Horário</Link>
            </nav>
        </div>
    );
};

export default Sidebar;