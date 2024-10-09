import React from 'react';
import * as s from './headerStyle';
import DefaultIcons from '@assets/icons/default';
import theme from '@theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const MainHeader = (props?: {left?: boolean}) => {
  const insets = useSafeAreaInsets();

  return (
    // <s.HeaderContainer
    //   padding={props?.left ? '10px 0 10px 24px' : '10px 0'}
    //   left={props?.left}>
    //   <s.HeaderLogo
    //     source={require('@assets/images/logo/headerLogo.png')}
    //     left={props?.left}
    //   />
    // </s.HeaderContainer>
    <s.GradientHeader
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={[theme.color.white, theme.color.blue100]}
      insets={insets}>
      <s.HeaderWrapper>
        <s.HeaderLogo
          source={require('@assets/images/logo/headerLogo.png')}
          left={props?.left}
        />
        <s.HeaderButtons>
          <DefaultIcons.Setting />
          <DefaultIcons.BoardOrFeed />
        </s.HeaderButtons>
      </s.HeaderWrapper>
    </s.GradientHeader>
  );
};

export default MainHeader;
