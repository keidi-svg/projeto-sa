// OcorrenciasPage.js
import React from 'react';
import { connect } from 'react-redux';
import { ocorrenciaActions } from '../_actions/ocorrencia.actions.js';

class OcorrenciasPage extends React.Component {
    componentDidMount() {
        this.props.getOcorrencias();
    }

    handleEdit(ocorrencia) {
        this.props.history.push(`/ocorrencias/edit/${ocorrencia.id}`);
    }

    handleDelete(ocorrenciaId) {
        this.props.deleteOcorrencia(ocorrenciaId);
    }

    render() {
        const { ocorrencias } = this.props;

        return (
            <div className="ocorrencias-page">
                <h2>Ocorrências</h2>
                <button onClick={() => this.props.history.push('/ocorrencias/add')}>Adicionar Ocorrência</button>
                <div className="ocorrencias-list">
                    {ocorrencias && ocorrencias.length > 0 ? (
                        ocorrencias.map(ocorrencia => (
                            <div key={ocorrencia.id} className="ocorrencia-card">
                                <h3>{ocorrencia.tipo}</h3>
                                <p>{ocorrencia.descricao}</p>
                                <p>{ocorrencia.data}</p>
                                <button onClick={() => this.handleEdit(ocorrencia)}>Editar</button>
                                <button onClick={() => this.handleDelete(ocorrencia.id)}>Excluir</button>
                            </div>
                        ))
                    ) : (
                        <div>Nenhuma ocorrência encontrada.</div>
                    )}
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { items: ocorrencias } = state.ocorrencias;
    return { ocorrencias };
}

const actionCreators = {
    getOcorrencias: ocorrenciaActions.getAll,
    deleteOcorrencia: ocorrenciaActions.delete
};

const connectedOcorrenciasPage = connect(mapState, actionCreators)(OcorrenciasPage);
export { connectedOcorrenciasPage as OcorrenciasPage };
