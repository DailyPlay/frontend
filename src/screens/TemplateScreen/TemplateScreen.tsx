import React, {useEffect} from 'react';

import * as s from './style';
import TextComponent from '@/components/Text';
import Button from '@/components/Button';
import WeatherIcons from '@/assets/icons/weather';
import ModalComponent from '@/components/Modal';
import useModal from '@/hooks/useModal';
import {Pressable, Text} from 'react-native';
import {networkErrorMessage} from '@/constants';

const Template = () => {
  const {isVisible, hide, show} = useModal();

  // useEffect(() => {
  //   show();
  // }, []);

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
      <Pressable onPress={show}>
        <Text>모달!!</Text>
      </Pressable>
      <ModalComponent
        isVisible={isVisible}
        hide={hide}
        title={networkErrorMessage.TITLE}
        messages={networkErrorMessage.CONTENTS}
        buttons={[
          {
            label: networkErrorMessage.BUTTONS.LABEL,
            onPress: () => console.log('재연결'),
          },
          // {
          //   label: networkErrorMessage.BUTTONS.LABEL,
          //   onPress: () => console.log('재연결'),
          //   highlight: false,
          // },
        ]}
      />
    </s.Container>
  );
};

export default Template;
