import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Introduction from '@screens/Introduction';

const Stack = createStackNavigator();

const DiaryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="introduction">
      <Stack.Screen name={'introduction'} component={Introduction} />
    </Stack.Navigator>
  );
};

export default DiaryStack;
