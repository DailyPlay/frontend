import React from 'react';
import {SvgProps} from 'react-native-svg';

import InActive from './inActive.svg';
import Active from './active.svg';

/**
 *  free svg icons from https://www.svgrepo.com/
 */

interface IconProps extends SvgProps {
  size?: number;
  marginTop?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
}

const CheckBoxIcons = {
  InActive: (props: IconProps) => createIcon(props, InActive),
  Active: (props: IconProps) => createIcon(props, Active),
};

const createIcon: React.FC = (props: IconProps, Svg: React.FC<SvgProps>) => {
  return (
    <Svg
      width={props.size ? props.width || props.size : 24}
      height={props.size ? props.height || props.size : 24}
      color={props.color ? props.color : '#000'}
      {...props}
    />
  );
};

export default CheckBoxIcons;
