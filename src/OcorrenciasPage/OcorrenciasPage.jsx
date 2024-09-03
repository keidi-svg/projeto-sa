import React from 'react';
import { connect } from 'react-redux';
import { ocorrenciaActions } from '../_actions';

class OcorrenciasPage extends React.Component {
    componentDidMount() {
        // Carrega as ocorrências do aluno quando o componente é montado
        this.props.getOcorrencias();
    }

    handleEdit(ocorrencia) {
        // Navega para a página de edição da ocorrência
        this.props.history.push(`/ocorrencias/edit/${ocorrencia.id}`);
    }

    handleDelete(ocorrenciaId) {
        // Exclui a ocorrência
        this.props.deleteOcorrencia(ocorrenciaId);
    }

    render() {
        const { ocorrencias } = this.props;

        return (
            <div className="ocorrencias-page">
                <h2>Ocorrências</h2>
                <div className="ocorrencias-list">
                    {ocorrencias.map(ocorrencia =>
                        <div key={ocorrencia.id} className="ocorrencia-card">
                            <h3>{ocorrencia.tipo}</h3>
                            <p>{ocorrencia.descricao}</p>
                            <p>{ocorrencia.data}</p>
                            <button onClick={() => this.handleEdit(ocorrencia)}>Editar</button>
                            <button onClick={() => this.handleDelete(ocorrencia.id)}>Excluir</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { ocorrencias } = state.ocorrencias;
    return { ocorrencias };
}

const actionCreators = {
    getOcorrencias: ocorrenciaActions.getAll,
    deleteOcorrencia: ocorrenciaActions.delete
};

const connectedOcorrenciasPage = connect(mapState, actionCreators)(OcorrenciasPage);
export { connectedOcorrenciasPage as OcorrenciasPage };
