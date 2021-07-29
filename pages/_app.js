import '../styles/globals.css';

import { AppWrapper } from '@context/AppContext';
import Footer from '@components/Footer.js';
import Head from 'next/head';
import Masthead from '@components/Masthead.js';

function App({ Component, pageProps }) {
  var _basePath;
  if (typeof window !== "undefined") {
    _basePath = window.location.href;
  }

  return (
    <AppWrapper>
      <Head>
        <title>Kaffeine Minds</title>
        <meta name="description" content="Kaffeine Minds is coffee developed for developers by developers" />
        <meta property="og:title" content="Kaffeine Minds" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${_basePath}images/kaffeine-minds.jpg`} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
