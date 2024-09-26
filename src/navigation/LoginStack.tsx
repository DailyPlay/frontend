import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '@/components/Header';

import Introduction from '@screens/Introduction';
import TermsOfUse from '@/screens/TermsOfUse';
import TermsOfUseDetail from '@/screens/TermsOfUseDetail';
import Preference from '@/screens/Preference';

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
      initialRouteName="introduction">
      <Stack.Screen name={'introduction'} component={Introduction} />
      <Stack.Screen name={'termsOfUse'} component={TermsOfUse} />
      <Stack.Screen
        name={'termsOfUseDetail'}
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
      <Stack.Screen name={'preference'} component={Preference} />
    </Stack.Navigator>
  );
};

export default LoginStack;
