import { combineReducers } from 'redux';
import { loginReducers } from './auth.reducer';

const rootReducers = combineReducers({
  loginUser: loginReducers,
});

export default rootReducers;
