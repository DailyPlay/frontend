import React from 'react';
import {Alert} from 'react-native';
import {login, me} from '@react-native-kakao/user';
import {useNavigation} from '@react-navigation/native';

import {LoginIcon} from '../style';
import {
  loginStackMenu,
  LoginStackNavigationProp,
} from '@navigation/LoginStack/loginStackType';

// import icon
import LoginSymbol from '@assets/icons/loginSymbol';

const KakaoLoginButton = () => {
  const navigation = useNavigation<LoginStackNavigationProp>();
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
