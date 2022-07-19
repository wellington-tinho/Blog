import React from 'react';
import type { AppProps } from 'next/app';

import { Center, ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme';
import { Header } from '../components/commons/Header';
import { Card } from '../components/cad/card';

import { cards } from '../components-mock.json'

function MyApp() {
  return (
    <ChakraProvider theme={theme}>
       <Header/>
       <Center>
        {cards.map((card)=> (
          <Card key={card.title} {...card} />
        ))}
       </Center>
    </ChakraProvider>
  )
};

export default MyApp;
