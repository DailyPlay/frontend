import React from 'react';
import {SvgProps} from 'react-native-svg';

import Kakao from './kakao.svg';

interface IconProps extends SvgProps {}

const LoginSymbol = {
  Kakao: (props: IconProps) => createIcon(props, Kakao),
};

const createIcon: React.FC = (props: IconProps, Svg: React.FC<SvgProps>) => {
  return <Svg />;
};

export default LoginSymbol;
