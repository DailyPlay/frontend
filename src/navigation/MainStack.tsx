import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '@screens/Main';
import Header from '@/components/Header';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => Header.MainHeader()}}>
      <Stack.Screen name={'mainScreen'} component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
