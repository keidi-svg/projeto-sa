import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ocorrenciaActions } from '../_actions/ocorrencia.actions.js';

const AddOcorrenciaPage = (props) => {
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'tipo') setTipo(value);
        if (name === 'descricao') setDescricao(value);
        if (name === 'data') setData(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        props.createOcorrencia({ tipo, descricao, data })
            .then(() => {
                navigate('/ocorrencias'); 
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <div className="add-ocorrencia-page">
            <h2>Adicionar Ocorrência</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Tipo:
                    <input type="text" name="tipo" value={tipo} onChange={handleChange} required />
                </label>
                <label>
                    Descrição:
                    <textarea name="descricao" value={descricao} onChange={handleChange} required />
                </label>
                <label>
                    Data:
                    <input type="date" name="data" value={data} onChange={handleChange} required />
                </label>
                <button type="submit" disabled={loading}>Salvar</button>
            </form>
        </div>
    );
};

const actionCreators = {
    createOcorrencia: ocorrenciaActions.create
};

export default connect(null, actionCreators)(AddOcorrenciaPage);