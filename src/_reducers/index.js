import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { ocorrencias } from './ocorrencia.reducer'; // Adicione isto

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  ocorrencias // Adicione isto
});

export default rootReducer;
