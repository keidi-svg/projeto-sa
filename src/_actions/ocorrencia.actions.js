import { ocorrenciaConstants } from '../_constants';
import { ocorrenciaService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const ocorrenciaActions = {
    getAll,
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
