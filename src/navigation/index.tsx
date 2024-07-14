import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import styled from '@emotion/native';

// import navigator
import MainStack from './MainStack';
import DiaryStack from './DiaryStack';

const Stack = createStackNavigator();

const Navigation = () => {
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      SplashScreen.hide();
    }, 500);
    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <BasicLayout>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="mainStack"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="mainStack" component={MainStack} />
          <Stack.Screen name="diaryStack" component={DiaryStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </BasicLayout>
  );
};

const BasicLayout = styled.SafeAreaView`
  flex: 1;
`;

export default Navigation;
