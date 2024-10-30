import React from 'react';
import {SvgProps} from 'react-native-svg';

import Play from './play.svg';
import PlayGradient from './playGradient.svg';
import PlayBigGradient from './playBigGradient.svg';
import PlayList from './playList.svg';
import PlayList2 from './playList2.svg';
import Recording from './recoding.svg';
import RecordingGradient from './recordingGradient.svg';
import Repeat from './repeat.svg';
import SelectedPlayList2 from './selectedPlayList2.svg';
import Shuffle from './shuffle.svg';
import SkipBack from './skipBack.svg';
import SkipForward from './skipForward.svg';
import StopGradient from './stopGradient.svg';
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
  PlayBigGradient: (props: IconProps) => createIcon(props, PlayBigGradient),
  PlayGradient: (props: IconProps) => createIcon(props, PlayGradient),
  PlayList: (props: IconProps) => createIcon(props, PlayList),
  PlayList2: (props: IconProps) => createIcon(props, PlayList2),
  Recording: (props: IconProps) => createIcon(props, Recording),
  RecordingGradient: (props: IconProps) => createIcon(props, RecordingGradient),
  Repeat: (props: IconProps) => createIcon(props, Repeat),
  SelectedPlayList2: (props: IconProps) => createIcon(props, SelectedPlayList2),
  Shuffle: (props: IconProps) => createIcon(props, Shuffle),
  SkipBack: (props: IconProps) => createIcon(props, SkipBack),
  SkipForward: (props: IconProps) => createIcon(props, SkipForward),
  StopGradient: (props: IconProps) => createIcon(props, StopGradient),
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
