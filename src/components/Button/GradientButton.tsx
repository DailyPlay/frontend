import theme from '@theme/theme';
import React from 'react';

// import component
import TextComponent from '../Text';

import * as s from './style';
import {IButtonProps} from './type';

const Gradient = (props: IButtonProps) => {
  const {label, disabled, onPress} = props;

  return (
    <s.GradientContainer
      activeOpacity={disabled ? 1 : 0}
      onPress={disabled ? undefined : onPress}>
      <s.GradientBox
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          disabled
            ? [theme.color.neutral500, theme.color.neutral500]
            : [theme.color.blue500, theme.color.black]
        }>
        <TextComponent fontType="buttonLarge" color={theme.color.white}>
          {label}
        </TextComponent>
      </s.GradientBox>
    </s.GradientContainer>
  );
};

export default React.memo(Gradient);
