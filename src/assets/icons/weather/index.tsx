import React from 'react';
import {SvgProps} from 'react-native-svg';

import Rain from './rain.svg';
import Snow from './snow.svg';
import Sunny from './sunny.svg';
import Cloudy from './cloudy.svg';
import Thunder from './thunder.svg';
import Cloudiness from './cloudiness.svg';

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

const WeatherIcons = {
  Rain: (props: IconProps) => createIcon(props, Rain),
  Snow: (props: IconProps) => createIcon(props, Snow),
  Sunny: (props: IconProps) => createIcon(props, Sunny),
  Cloudy: (props: IconProps) => createIcon(props, Cloudy),
  Thunder: (props: IconProps) => createIcon(props, Thunder),
  Cloudiness: (props: IconProps) => createIcon(props, Cloudiness),
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

export default WeatherIcons;
