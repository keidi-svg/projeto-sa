// Layout.jsx
import React from 'react';
import Sidebar from '../SideBar/SideBar.jsx';
import './Layout.css'; // Estilos comuns para o layout

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Sidebar />
            <div className="main-content">
                {children}
                <footer>
                    <a href="/" className="footer-icon">
                        <i className="fa fa-home"></i>
                    </a>
                    <a href="/notificacoes" className="footer-icon">
                        <i className="fa fa-bell"></i>
                    </a>
                    <a href="/noticias" className="footer-icon">
                        Notícias
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
