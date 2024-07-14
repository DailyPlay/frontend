import React from 'react';
import * as s from './headerStyle';

const MainHeader = (props?: {left?: boolean}) => {
  return (
    <s.HeaderContainer
      padding={props?.left ? '10px 0 10px 24px' : '10px 0'}
      left={props?.left}>
      <s.HeaderLogo
        source={require('@assets/images/logo/headerLogo.png')}
        left={props?.left}
      />
    </s.HeaderContainer>
  );
};

export default MainHeader;
