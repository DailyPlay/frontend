import React from 'react';
import * as s from './style';
import TextComponent from '../Text';
import theme from '@theme/theme';
import {IButtonProps} from './type';

const Default = (props: IButtonProps) => {
  const {label, disabled, onPress, width, type} = props;

  return (
    <s.ButtonContainer
      width={width}
      type={type}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0}
      onPress={disabled ? undefined : onPress}>
      <TextComponent
        fontType="buttonLarge"
        color={
          type === 'Gray'
            ? theme.color.neutral500
            : disabled
            ? theme.color.neutral500
            : theme.color.white
        }>
        {label}
      </TextComponent>
    </s.ButtonContainer>
  );
};

export default React.memo(Default);
