import React from 'react';
import type { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = function ({ Component, pageProps }) {
  return <Component {...pageProps} />;
};

export default MyApp;
