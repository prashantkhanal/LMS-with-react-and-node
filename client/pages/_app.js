import TopNav from '../components/TopNav';
import '../public/css/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
