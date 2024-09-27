import React from 'react';
import {Alert} from 'react-native';
import {login, me} from '@react-native-kakao/user';
import {useNavigation} from '@react-navigation/native';

import {loginStackMenu} from '@constants/navigatorMenu';

import {LoginIcon} from '../style';

// import icon
import LoginSymbol from '@assets/icons/loginSymbol';
import {RootStackNavigationProp} from '@type/rootstackParamType';

const KakaoLoginButton = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const onPress = async () => {
    try {
      const res = await login();
      if (res) {
        const kakaoProfile = await me();
        navigation.navigate(loginStackMenu.termsOfUse.name);
      }
    } catch (e: any) {
      if (e && typeof e === 'object') {
        let title = '';
        let message = '';

        switch (e.code) {
          case 'Cancelled':
            title = '로그인 취소';
            message = '사용자가 로그인을 취소했습니다.';
        }

        Alert.alert(title, message);
      }
    }
  };

  return (
    <LoginIcon bgColor="#FEE500" onPress={onPress}>
      <LoginSymbol.Kakao />
    </LoginIcon>
  );
};

export default KakaoLoginButton;
