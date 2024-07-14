import React from 'react';
import {SvgProps} from 'react-native-svg';

import ChevronDown from './chevronDown.svg';
import ChevronLeft from './chevronLeft.svg';
import NarrowLeft from './narrowLeft.svg';
import ChevronRight from './chevronRight.svg';

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

const ArrowIcons = {
  ChevronDown: (props: IconProps) => createIcon(props, ChevronDown),
  ChevronLeft: (props: IconProps) => createIcon(props, ChevronLeft),
  ChevronRight: (props: IconProps) => createIcon(props, ChevronRight),
  NarrowLeft: (props: IconProps) => createIcon(props, NarrowLeft),
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

export default ArrowIcons;
