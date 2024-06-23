import React from 'react';

import * as s from './style';
import TextComponent from '@/components/Text';
import Button from '@/components/Button';

const Template = () => {
  return (
    <s.Container>
      <TextComponent fontType="bodyLarge">테스팅</TextComponent>
      <Button.Default label="label" onPress={() => console.log('test')} />
      <Button.Gradient label="label" onPress={() => console.log('test')} />
    </s.Container>
  );
};

export default Template;
