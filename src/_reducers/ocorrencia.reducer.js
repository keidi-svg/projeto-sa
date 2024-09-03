import { ocorrenciaConstants } from '../_constants';

export function ocorrencias(state = {}, action) {
    switch (action.type) {
        case ocorrenciaConstants.GETALL_SUCCESS:
            return {
                items: action.ocorrencias
            };
        case ocorrenciaConstants.DELETE_SUCCESS:
            return {
                items: state.items.filter(ocorrencia => ocorrencia.id !== action.id)
            };
        default:
            return state;
    }
}
