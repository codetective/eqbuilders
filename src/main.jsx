import * as React from 'react';
import App from './App.jsx';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
