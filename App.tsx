/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './src/navigation';
import {ThemeProvider} from '@emotion/react';

import theme from '@/theme/theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ModalProvider} from '@/components/Modal/ModalContext';

function App(): React.JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {throwOnError: true, retry: 1},
      mutations: {throwOnError: true, retry: 1},
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Navigation />
        </ModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
