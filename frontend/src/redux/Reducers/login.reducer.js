import { loginConstants } from '../Action/constant';

const initState = {
  data: [],
  error: '',
  authenticating: false,
  authenticate: false,
};

const loginReducer = (state = initState, { type, payload }) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case loginConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
        error: null,
      };
      break;
    case loginConstants.LOGIN_SUCESS:
      state = {
        ...state,
        data: payload.data,
        authenticating: false,
        authenticate: true,
        error: null,
      };
      break;
    case loginConstants.lOGIN_FAILED:
      state = {
        ...state,
        error: payload.error,
        authenticate: false,
        authenticating: false,
      };
      console.log('error reducers', payload.error);
      break;

    //
  }
  return state;
};

export default loginReducer;
