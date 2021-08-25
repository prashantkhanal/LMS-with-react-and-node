import { combineReducers } from 'redux';
import { loginReducers } from './auth.reducer';

const rootReducers = combineReducers({
  auth: loginReducers,
});

export default rootReducers;
