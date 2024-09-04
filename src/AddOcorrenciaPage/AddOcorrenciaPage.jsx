import React from 'react';
import { connect } from 'react-redux';
import { ocorrenciaActions } from '../_actions/ocorrencia.actions.js';
import { withRouter } from 'react-router-dom';

class AddOcorrenciaPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: '',
            descricao: '',
            data: '',
            loading: false
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { tipo, descricao, data } = this.state;
        this.setState({ loading: true });

        this.props.createOcorrencia({ tipo, descricao, data })
            .then(() => {
                this.props.history.push('/ocorrencias');
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }

    render() {
        const { tipo, descricao, data, loading } = this.state;

        return (
            <div className="add-ocorrencia-page">
                <h2>Adicionar Ocorrência</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Tipo:
                        <input type="text" name="tipo" value={tipo} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Descrição:
                        <textarea name="descricao" value={descricao} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Data:
                        <input type="date" name="data" value={data} onChange={this.handleChange} required />
                    </label>
                    <button type="submit" disabled={loading}>Salvar</button>
                </form>
            </div>
        );
    }
}

const actionCreators = {
    createOcorrencia: ocorrenciaActions.create
};

const connectedAddOcorrenciaPage = connect(null, actionCreators)(withRouter(AddOcorrenciaPage));
export { connectedAddOcorrenciaPage as AddOcorrenciaPage };
