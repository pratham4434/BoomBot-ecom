import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components/Index';
import '../styles/globals.css';
import { AppContextProvider } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;