import React, {useEffect, useState} from 'react';
import {Dimensions, Image} from 'react-native';

// import local
import * as s from './style';

// import Component
import TextComponent from '@components/Text';
import KakaoLoginButton from './components/KakaoLogin';

interface IntroductionProps {
  navigation: any;
}

const Introduction = ({navigation}: IntroductionProps) => {
  const [imgHeight, setImgHeight] = useState(0);

  const backgroundImage = require('@assets/images/introductionBackground.png');
  const {width} = Dimensions.get('window');
  const imgProps = Image.resolveAssetSource(backgroundImage);

  useEffect(() => {
    setImgHeight(imgProps.height * (width / imgProps.width));
  }, [imgProps.width, imgProps.height, width]);

  return (
    <s.Container>
      <s.TextWrapper>
        <TextComponent fontType="headlineSmall">
          {`오늘 하루를 대표하는 노래는\n어떤 노래인가요?`}
        </TextComponent>
        <TextComponent fontType="bodyLarge">
          {`하루 일기를 작성하면\n일기와 어울리는 노래를 추천해드려요.`}
        </TextComponent>
      </s.TextWrapper>

      {/* 배경 이미지 */}
      <s.ImageWrapper source={{uri: imgProps.uri, height: imgHeight}} />

      {/* 로그인/회원가입 */}
      <s.IconWrapper>
        <s.LoginIcon bgColor="white" border={true} />
        <s.LoginIcon bgColor="black" />
        <KakaoLoginButton />
      </s.IconWrapper>
      <s.GuestTextBox onPress={() => navigation.navigate('mainStack')}>
        <TextComponent fontType="titleSmall" color="#667580">
          또는 게스트로 시작하기
        </TextComponent>
      </s.GuestTextBox>
    </s.Container>
  );
};

export default Introduction;
