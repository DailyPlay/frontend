import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '@components/Header';
import MainScreen from '@screens/Main';
import TabNavigatorContainer from '@components/Tab/TabContainer';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    // <Stack.Navigator screenOptions={{header: () => Header.MainHeader()}}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'mainScreen'} component={MainScreen} />
      <Stack.Screen
        name={'TabNavigatorScreen'}
        component={TabNavigatorContainer}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
