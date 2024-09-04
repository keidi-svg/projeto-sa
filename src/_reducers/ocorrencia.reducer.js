import { ocorrenciaConstants } from '../_constants';

export function ocorrencias(state = { items: [] }, action) { // Estado inicial atualizado
    switch (action.type) {
        case ocorrenciaConstants.GETALL_SUCCESS:
            return {
                ...state,
                items: action.ocorrencias
            };
        case ocorrenciaConstants.DELETE_SUCCESS:
            return {
                ...state,
                items: state.items.filter(ocorrencia => ocorrencia.id !== action.id)
            };
        default:
            return state;
    }
}
