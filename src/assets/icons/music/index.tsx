import React from 'react';
import {SvgProps} from 'react-native-svg';

import Play from './play.svg';
import PlayList from './playList.svg';
import Recording from './recoding.svg';
import Repeat from './repeat.svg';
import Shuffle from './shuffle.svg';
import SkipBack from './skipBack.svg';
import SkipForward from './skipForward.svg';
import Bookmark from './bookmark.svg';
import ThumbsDown from './thumbsDown.svg';
import ThumbsUp from './thumbsUp.svg';
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

const MusicIcons = {
  Play: (props: IconProps) => createIcon(props, Play),
  PlayList: (props: IconProps) => createIcon(props, PlayList),
  Recording: (props: IconProps) => createIcon(props, Recording),
  Repeat: (props: IconProps) => createIcon(props, Repeat),
  Shuffle: (props: IconProps) => createIcon(props, Shuffle),
  SkipBack: (props: IconProps) => createIcon(props, SkipBack),
  SkipForward: (props: IconProps) => createIcon(props, SkipForward),
  Bookmark: (props: IconProps) => createIcon(props, Bookmark),
  ThumbsDown: (props: IconProps) => createIcon(props, ThumbsDown),
  ThumbsUp: (props: IconProps) => createIcon(props, ThumbsUp),
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

export default MusicIcons;
