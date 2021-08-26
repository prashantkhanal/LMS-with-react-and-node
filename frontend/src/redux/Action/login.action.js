import { loginConstants } from './constant';
import axios from '../../http';

export const loginAction = (userData) => {
  return async (dispatch) => {
    dispatch({
      type: loginConstants.LOGIN_REQUEST,
    });
    let res;
    try {
      res = await axios.post('/login', userData);
      const { data } = res.data;

      window.localStorage.setItem('user', JSON.stringify(data));
      dispatch({
        type: loginConstants.LOGIN_SUCESS,
        payload: {
          data,
        },
      });
    } catch (error) {
      // console.log(error.response.data.message);
      dispatch({
        type: loginConstants.lOGIN_FAILED,
        payload: {
          error: 'Invalid credentails',
        },
      });
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const data = JSON.parse(window.localStorage.getItem('user'));
    dispatch({
      type: loginConstants.LOGIN_SUCESS,
      payload: { data },
    });
  };
};
