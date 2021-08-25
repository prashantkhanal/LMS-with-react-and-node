import axios from 'axios';

import { loginContant, logoutContant } from '../constant';

const { LOGIN_FAILED, LOGIN_SUCESS, LOGIN_REQUEST } = loginContant;
const { LOGOUT_FAILED, LOGOUT_SUCESS, LOGOUT_REQUEST } = loginContant;
export const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    let res;
    try {
      res = await axios.post('/api/v1/login', user);
      const { data } = res.data;
      console.log('this is the action data', data);
      window.localStorage.setItem('data', JSON.stringify(data));
      window.localStorage.setItem('user', JSON.stringify(user));
      dispatch({
        type: LOGIN_SUCESS,
        payload: {
          data,
        },
      });
    } catch (err) {
      // console.log('ERRIR', err.response.data.message);

      dispatch({
        type: LOGIN_FAILED,
        // payload: error.response.data,
      });
      //
    }
  };
};
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const data = JSON.parse(window.localStorage.getItem('data'));
    dispatch({
      type: authConstants.LOGIN_SUCESS,
      payload: { data },
    });
  };
};
