import TopNav from '../components/TopNav';
import '../public/css/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
