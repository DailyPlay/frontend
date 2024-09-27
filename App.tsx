/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from '@emotion/react';
import {initializeKakaoSDK} from '@react-native-kakao/core';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import theme from '@theme/theme';
import Navigation from './src/navigation';
import {ModalProvider} from '@components/Modal/ModalContext';

function App(): React.JSX.Element {
  initializeKakaoSDK(`${process.env.RN_APP_KAKAO_NATIVE_KEY}`);

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
