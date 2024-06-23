import React from 'react';
import {IFontProps, IFontStyle, TFont} from './textType';
import styled from '@emotion/native';

const TextComponent = (props: IFontProps) => {
  const {fontType, children, color, margin} = props;
  return (
    <StyledText {...fontStyle[fontType]} color={color} margin={margin}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text<IFontStyle>`
  font-size: ${({fontSize}) => fontSize};
  line-height: ${({lineHeight}) => lineHeight};
  font-weight: ${({fontWeight}) => fontWeight};
  color: ${({color, theme}) => (color ? color : theme.color.black)};
  ${({margin}) => (margin ? `margin: ${margin}` : null)};
`;

const fontStyle: Record<TFont, IFontStyle> = {
  displayLarge: {fontSize: '58px', lineHeight: '64px', fontWeight: 700},
  displayMedium: {fontSize: '44px', lineHeight: '52px', fontWeight: 700},
  displaySmall: {fontSize: '36px', lineHeight: '44px', fontWeight: 700},
  headlineLarge: {fontSize: '32px', lineHeight: '40px', fontWeight: 700},
  headlineMedium: {fontSize: '28px', lineHeight: '36px', fontWeight: 700},
  headlineSmall: {fontSize: '24px', lineHeight: '32px', fontWeight: 700},
  titleLarge: {fontSize: '22px', lineHeight: '28px', fontWeight: 700},
  titleMedium: {fontSize: '18px', lineHeight: '24px', fontWeight: 700},
  titleSmall: {fontSize: '14px', lineHeight: '20px', fontWeight: 700},
  labelLarge: {fontSize: '16px', lineHeight: '24px', fontWeight: 600},
  labelMedium: {fontSize: '12px', lineHeight: '16px', fontWeight: 600},
  labelSmall: {fontSize: '11px', lineHeight: '16px', fontWeight: 600},
  bodyLarge: {fontSize: '16px', lineHeight: '24px', fontWeight: 400},
  bodyMedium: {fontSize: '14px', lineHeight: '20px', fontWeight: 400},
  bodySmall: {fontSize: '12px', lineHeight: '16px', fontWeight: 400},
  buttonLarge: {fontSize: '18px', lineHeight: '24px', fontWeight: 700},
  buttonMedium: {fontSize: '16px', lineHeight: '24px', fontWeight: 700},
  buttonSmall: {fontSize: '14px', lineHeight: '16px', fontWeight: 700},
};
export default TextComponent;
