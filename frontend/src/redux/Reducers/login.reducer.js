import { loginConstants } from '../Action/constant';

const initState = {
  data: '',
  error: false,
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
        authenticate: false,
      };
      break;
    case loginConstants.LOGIN_SUCESS:
      state = {
        ...state,
        data: payload.data,
        authenticating: false,
        authenticate: true,
      };
      break;
    case loginConstants.lOGIN_FAILED:
      state = {
        ...state,
        authenticate: false,
        authenticating: false,
        data: '',
      };
      break;
    //
  }
  return state;
};

export default loginReducer;
