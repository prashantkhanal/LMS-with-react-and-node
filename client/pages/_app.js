import TopNav from '../components/TopNav';
import '../public/css/styles.css';
import { ToastContainer } from 'react-toastify';
import { Provider, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import store from '../redux/store';
import { useEffect } from 'react';
import { login } from '../redux/Actions/auth';

// const dispatch = useDispatch();

// useEffect(() => {
//   const user = JSON.parse(window.localStorage.getItem('data'));
//   dispatch({
//     type:aut
//   });
// }, []);
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <TopNav />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
