import '../styles/globals.css';

import { AppWrapper } from '@context/AppContext';
import Head from 'next/head';
import Masthead from '@components/Masthead.js';

function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head>
        <title>Kaffeine Minds</title>
        <meta name="description" content="Kaffeine Minds website" />
      </Head>
      <Masthead />
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default App
