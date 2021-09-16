import '../styles/global.css';
import React from 'react';
import { Provider } from 'react-redux';

import store from '../store/store.js';

export default function App({ Component, pageProps }) {
  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </React.StrictMode>
    </>
  );
}
