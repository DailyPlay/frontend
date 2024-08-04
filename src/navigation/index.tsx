import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TemplateScreen from '@screens/TemplateScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const Navigation = () => {
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      SplashScreen.hide();
    }, 500);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'app'} component={TemplateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
