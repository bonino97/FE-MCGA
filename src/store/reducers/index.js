import { combineReducers } from 'redux';
import clientsReducer from './clientsReducer';

// Se utiliza un reducer Index que integrara todos los demas reducers.

export default combineReducers({
  clients: clientsReducer,
});
