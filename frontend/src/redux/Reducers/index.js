import { combineReducers } from 'redux';
import loginReducer from './login.reducer';

const rootReducer = combineReducers({
  loginReducer: loginReducer,
});

export default rootReducer;
