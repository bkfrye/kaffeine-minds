import '../styles/globals.css';

import { AppWrapper } from '@context/AppContext';
import Footer from '@components/Footer.js';
import Head from 'next/head';
import Masthead from '@components/Masthead.js';

import metaImg from '@images/kaffeine-minds.jpg';

function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head>
        <title>Kaffeine Minds</title>
        <meta name="description" content="Kaffeine Minds is good from the ground up" />
        <meta property="og:title" content="Kaffeine Minds" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImg} />
      </Head>
      <Masthead />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </AppWrapper>
  )
}

export default App
