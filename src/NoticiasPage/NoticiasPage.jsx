import React from 'react';
import './NoticiasPage.css';
import Layout from '../_components/Layout/Layout.jsx';

const NoticiasPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="news-section">
          <h1 className="title">Notícias</h1>
          <div className="news">
            <div className="news-item">
              <div className="date">
                <span>28</span> <small>Mar</small>
              </div>
              <div className="content">
                <h2>Notícia</h2>
                <p>No dia 28 a FIESC irá organizar uma campanha de menor aprendiz</p>
              </div>
            </div>

            <div className="news-item">
              <div className="date">
                <span>31</span> <small>Mar</small>
              </div>
              <div className="content">
                <h2>Notícia</h2>
                <p>Dia 31 irá ter o Dia D do terceirão com tema esportes</p>
              </div>
            </div>

            <div className="news-item">
              <div className="date">
                <span>08</span> <small>Abril</small>
              </div>
              <div className="content">
                <h2>Notícia</h2>
                <p>No dia 08 os estudantes terão uma saída para um museu</p>
              </div>
            </div>

            <div className="news-item">
              <div className="date">
                <span>14</span> <small>Abril</small>
              </div>
              <div className="content">
                <h2>Notícia</h2>
                <p>No dia 14 os estudantes terão a prova do canguru de matemática</p>
              </div>
            </div>
          </div>
          <div className="ver-mais">Ver Mais</div>
          <div className="event-promo">
            <h2>Propaganda de evento</h2>
            <p>Dia da Família</p>
            <p>29/05/24</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NoticiasPage;