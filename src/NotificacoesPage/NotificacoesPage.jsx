import React from 'react';
import './NotificacoesPage.css';

const NotificacoesPage = () => {
    const notificacoes = [
        { id: 1, tipo: 'Atraso', descricao: 'O estudante compareceu a aula às 8:57', data: '27/05' },
        { id: 2, tipo: 'Atraso', descricao: 'O estudante compareceu a aula às 8:10', data: '25/05' },
        { id: 3, tipo: 'Uniforme', descricao: 'O estudante compareceu sem uniforme', data: '30/05' },
        { id: 4, tipo: 'Atraso', descricao: 'O estudante compareceu a aula às 10:20', data: '03/06' },
        { id: 5, tipo: 'Uniforme', descricao: 'O estudante compareceu sem uniforme', data: '08/06' },
    ];

    return (
        <div className="notificacoes-container">
            <div className="notificacoes-header">
                <h1>Notificações</h1>
            </div>
            <div className="notificacoes-list">
                {notificacoes.map((notificacao) => (
                    <div key={notificacao.id} className="notificacao-item">
                        <h2>Notificação {notificacao.tipo}</h2>
                        <p>{notificacao.descricao}</p>
                        <span>{notificacao.data}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { NotificacoesPage };
