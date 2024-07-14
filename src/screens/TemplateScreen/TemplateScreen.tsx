import React from 'react';

import * as s from './style';
import TextComponent from '@/components/Text';

const Template = () => {
  return (
    <s.Container>
      <TextComponent fontType="bodyLarge">
        일기 스택 시작 지점이다
      </TextComponent>
    </s.Container>
  );
};

export default Template;
