import { ocorrenciaConstants } from '../_constants';
import { ocorrenciaService } from '../_services/ocorrencia.service';

export const ocorrenciaActions = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};

function getAll() {
    return dispatch => {
        ocorrenciaService.getAll()
            .then(
                ocorrencias => dispatch({ type: ocorrenciaConstants.GETALL_SUCCESS, ocorrencias }),
                error => dispatch({ type: ocorrenciaConstants.GETALL_FAILURE, error })
            );
    };
}

function _delete(id) {
    return dispatch => {
        ocorrenciaService.delete(id)
            .then(
                () => dispatch({ type: ocorrenciaConstants.DELETE_SUCCESS, id }),
                error => dispatch({ type: ocorrenciaConstants.DELETE_FAILURE, id, error })
            );
    };
}

function getById(id) {
    return dispatch => {
        dispatch({ type: ocorrenciaConstants.GETBYID_REQUEST });

        ocorrenciaService.getById(id)
            .then(
                ocorrencia => dispatch({ type: ocorrenciaConstants.GETBYID_SUCCESS, ocorrencia }),
                error => dispatch({ type: ocorrenciaConstants.GETBYID_FAILURE, error })
            );
    };
}

function update(id, ocorrencia) {
    return dispatch => {
        dispatch({ type: ocorrenciaConstants.UPDATE_REQUEST });

        ocorrenciaService.update(id, ocorrencia)
            .then(
                ocorrencia => dispatch({ type: ocorrenciaConstants.UPDATE_SUCCESS, ocorrencia }),
                error => dispatch({ type: ocorrenciaConstants.UPDATE_FAILURE, error })
            );
    };
}

function create(ocorrencia) {
    return dispatch => {
        dispatch({ type: ocorrenciaConstants.CREATE_REQUEST });

        ocorrenciaService.create(ocorrencia)
            .then(
                ocorrencia => dispatch({ type: ocorrenciaConstants.CREATE_SUCCESS, ocorrencia }),
                error => dispatch({ type: ocorrenciaConstants.CREATE_FAILURE, error })
            );
    };
}
