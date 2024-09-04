import { authHeader } from '../_helpers';

export const ocorrenciaService = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/ocorrencias`, requestOptions).then(handleResponse);
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`/ocorrencias/${id}`, requestOptions).then(handleResponse);
}
function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/ocorrencias/${id}`, requestOptions).then(handleResponse);
}

function update(id, ocorrencia) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(ocorrencia)
    };

    return fetch(`/ocorrencias/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}

function create(ocorrencia) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(ocorrencia)
    };

    return fetch(`/ocorrencias`, requestOptions).then(handleResponse);
}
