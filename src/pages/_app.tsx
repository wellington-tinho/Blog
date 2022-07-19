import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'

const MyApp: React.FC<AppProps> = function ({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />;
    </ChakraProvider>
  )
};

export default MyApp;
