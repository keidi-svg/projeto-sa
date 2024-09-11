import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ocorrenciaActions } from '../_actions/ocorrencia.actions.js';

const EditOcorrenciaPage = (props) => {
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams(); 

    useEffect(() => {
        props.getOcorrencia(id).then(ocorrencia => {
            setTipo(ocorrencia.tipo);
            setDescricao(ocorrencia.descricao);
            setData(ocorrencia.data);
        });
    }, [id, props]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'tipo') setTipo(value);
        if (name === 'descricao') setDescricao(value);
        if (name === 'data') setData(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        props.updateOcorrencia(id, { tipo, descricao, data })
            .then(() => {
                navigate('/ocorrencias');
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <div className="edit-ocorrencia-page">
            <h2>Editar Ocorrência</h2>
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
    getOcorrencia: ocorrenciaActions.getById,
    updateOcorrencia: ocorrenciaActions.update
};

export default connect(null, actionCreators)(EditOcorrenciaPage);