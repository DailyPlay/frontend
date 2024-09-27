import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '@components/Header';
import MainScreen from '@screens/Main';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => Header.MainHeader()}}>
      <Stack.Screen name={'mainScreen'} component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
