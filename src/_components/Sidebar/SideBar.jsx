import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                &#9776; {/* Ícone de menu hamburger */}
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <nav className="sidebar-menu">
                    <Link to="/dados-pessoais" className="menu-item">Dados Pessoais</Link>
                    <Link to="/ocorrencias" className="menu-item">Ocorrências</Link>
                    <Link to="/noticias" className="menu-item">Notícias</Link>
                    <Link to="/notificacoes" className="menu-item">Notificações</Link>
                    <Link to="/fale-conosco" className="menu-item">Fale Conosco</Link>
                    <Link to="/quadro-horario" className="menu-item">Quadro de Horário</Link>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;