import React from 'react';
import theme from '@/theme/theme';

// import component
import TextComponent from '../Text';

import * as s from './style';
import {TypeGlBtnProps} from './type';

const Gradient = (props: TypeGlBtnProps) => {
  const {label, onPress} = props;

  return (
    <s.GradientContainer onPress={onPress}>
      <s.GradientBox
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[theme.color.blue500, theme.color.black]}>
        <TextComponent fontType="buttonLarge" color={theme.color.white}>
          {label}
        </TextComponent>
      </s.GradientBox>
    </s.GradientContainer>
  );
};

export default React.memo(Gradient);
