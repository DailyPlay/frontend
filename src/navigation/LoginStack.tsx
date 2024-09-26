import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '@/components/Header';

import Introduction from '@screens/Introduction';
import TermsOfUse from '@/screens/TermsOfUse';
import TermsOfUseDetail from '@/screens/TermsOfUseDetail';
import Preference from '@/screens/Preference';
import {loginStackMenu} from '@/constants/navigatorMenu';

const Stack = createStackNavigator();

// type TParams = {
//   termsOfUseDetail: {
//     label: string;
//   };
// };

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={loginStackMenu.introduction.name}>
      <Stack.Screen
        name={loginStackMenu.introduction.name}
        component={Introduction}
      />
      <Stack.Screen
        name={loginStackMenu.termsOfUse.name}
        component={TermsOfUse}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={loginStackMenu.termsOfUseDetail.name}
        component={TermsOfUseDetail}
        options={({
          navigation,
          route,
        }: {
          navigation: any;
          route: RouteProp<any>;
        }) => ({
          headerShown: true,
          header: () =>
            Header.StackHeader({
              navigation: navigation,
              isBackBtn: true,
              title: route.params?.label,
            }),
        })}
      />
      <Stack.Screen
        name={loginStackMenu.preference.name}
        component={Preference}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
