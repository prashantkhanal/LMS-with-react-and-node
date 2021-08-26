import { loginConstants } from './constant';
import axios from '../../http';

export const loginAction = (userData) => {
  console.log('this is the action user', userData);
  return async (dispatch) => {
    dispatch({
      type: loginConstants.LOGIN_REQUEST,
    });
    let res;
    try {
      res = await axios.post('/login', userData);
      const { data } = res.data;
      console.log(data);
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
