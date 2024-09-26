import React from 'react';
import {SvgProps} from 'react-native-svg';

import Ballad from './ballad.svg';

interface IconProps extends SvgProps {
  size?: number;
  margin?: string | number;
  marginTop?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
}

const GenreGradientIcon = {
  Ballad: (props: IconProps) => createIcon(props, Ballad),
};

const createIcon: React.FC = (props: IconProps, Svg: React.FC<SvgProps>) => {
  return (
    <Svg
      width={props.size ? props.width || props.size : 24}
      height={props.size ? props.height || props.size : 24}
      {...props}
    />
  );
};

export default GenreGradientIcon;
