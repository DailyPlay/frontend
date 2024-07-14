import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TemplateScreen from '@screens/TemplateScreen';
import Header from '@/components/Header';
import {Alert} from 'react-native';

const Stack = createStackNavigator();

const DiaryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        header: () =>
          Header.StackHeader({
            title: '일기 스택',
            isBackBtn: true,
            navigation,
            isCloseBtn: true,
            onClosePress: () => {
              Alert.alert('빠밤', '빠바바밤', [{text: '확인'}]);
            },
          }),
      })}>
      <Stack.Screen name={'diary'} component={TemplateScreen} />
    </Stack.Navigator>
  );
};

export default DiaryStack;
