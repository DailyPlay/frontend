import React from 'react';

import * as s from './style';
import TextComponent from '@/components/Text';
import Button from '@/components/Button';
import WeatherIcons from '@/assets/icons/weather';

const Template = () => {
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
    </s.Container>
  );
};

export default Template;
