import { loginContant, logoutContant } from '../constant';

const intiState = {
  user: {
    email: '',
    password: '',
  },
  authencating: false,
  authenticate: false,
  token: null,
  error: null,
};
const { LOGIN_FAILED, LOGIN_SUCESS, LOGIN_REQUEST } = loginContant;

export const loginReducers = (state = intiState, { payload, type }) => {
  console.log('this its the paylaod reducers', payload);

  switch (type) {
    case LOGIN_REQUEST:
      state = {
        ...state,
        authencating: true,
      };
      break;
    case LOGIN_SUCESS:
      state = {
        ...state,
        user: payload.data,
        authenticate: true,
        authencating: false,
      };
      break;
    case LOGIN_FAILED:
      state = {
        ...state,
        authencating: false,
        authenticate: false,
        // error: payload.error,
      };
      break;
  }
  return state;
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: logoutContant,
    });
  };
};
