import React from 'react';
import * as s from './style';
import TextComponent from '@/components/Text';
import Button from '@/components/Button';
import WeatherIcons from '@/assets/icons/weather';
// import useModal from '@/hooks/useModal';
import {Pressable, Text} from 'react-native';
import useModalUtils from '@/utils/functions/modalUtils';

const Template = () => {
  const {networkErrorModal} = useModalUtils();

  return (
    <s.Container>
      <TextComponent fontType="bodyLarge">테스팅</TextComponent>
      <Button.Default label="label" onPress={() => console.log('test')} />
      <Button.Gradient label="label" onPress={() => console.log('test')} />
      <s.IconsWrapper>
        <WeatherIcons.Sunny />
        <WeatherIcons.Cloudiness />
        <WeatherIcons.Cloudy />
        <WeatherIcons.Rain />
        <WeatherIcons.Snow />
        <WeatherIcons.Thunder />
      </s.IconsWrapper>
      <Pressable onPress={() => networkErrorModal(() => console.log('action'))}>
        <Text>모달</Text>
      </Pressable>
    </s.Container>
  );
};

export default Template;
