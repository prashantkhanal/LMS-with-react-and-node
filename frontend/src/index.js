import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/Store';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer position="top-center" />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
