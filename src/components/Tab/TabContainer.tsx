import React from 'react';
import MainHeader from '../Header/MainHeader';
import TabNavigator from '@navigation/Tab/TabNavigator';
import * as s from './style';

const TabNavigatorContainer = () => (
  <s.Container>
    <MainHeader />
    <s.NavigatorContainer>
      <TabNavigator />
    </s.NavigatorContainer>
  </s.Container>
);

export default TabNavigatorContainer;
