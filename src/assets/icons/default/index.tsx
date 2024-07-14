import React from 'react';
import {SvgProps} from 'react-native-svg';

import Close from './close.svg';
import User from './user.svg';
import Bell from './bell.svg';
import CircleAlert from './circleAlert.svg';
import Send from './send.svg';
import Refresh from './refresh.svg';
import DotsHorizontal from './dotsHorizontal.svg';
import BoardOrFeed from './boardOrFeed.svg';
import Setting from './setting.svg';
import Calendar from './calendar.svg';
import Share from './share.svg';
import Download from './download.svg';
import Edit from './edit.svg';
import Delete from './delete.svg';
import Plus from './plus.svg';
import Search from './search.svg';
import Favorite from './favorite.svg';
import Filter from './filter.svg';
import DotsVertical from './dotsVertical.svg';
import SwitchVertical from './switchVertical.svg';
import SwitchVerticalReverse from './switchVerticalReverse.svg';

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

const DefaultIcons = {
  Close: (props: IconProps) => createIcon(props, Close),
  User: (props: IconProps) => createIcon(props, User),
  Bell: (props: IconProps) => createIcon(props, Bell),
  CircleAlert: (props: IconProps) => createIcon(props, CircleAlert),
  Send: (props: IconProps) => createIcon(props, Send),
  Refresh: (props: IconProps) => createIcon(props, Refresh),
  DotsHorizontal: (props: IconProps) => createIcon(props, DotsHorizontal),
  Setting: (props: IconProps) => createIcon(props, Setting),
  BoardOrFeed: (props: IconProps) => createIcon(props, BoardOrFeed),
  Calendar: (props: IconProps) => createIcon(props, Calendar),
  Share: (props: IconProps) => createIcon(props, Share),
  Download: (props: IconProps) => createIcon(props, Download),
  Edit: (props: IconProps) => createIcon(props, Edit),
  Delete: (props: IconProps) => createIcon(props, Delete),
  Plus: (props: IconProps) => createIcon(props, Plus),
  Search: (props: IconProps) => createIcon(props, Search),
  Favorite: (props: IconProps) => createIcon(props, Favorite),
  Filter: (props: IconProps) => createIcon(props, Filter),
  DotsVertical: (props: IconProps) => createIcon(props, DotsVertical),
  SwitchVertical: (props: IconProps) => createIcon(props, SwitchVertical),
  SwitchVerticalReverse: (props: IconProps) =>
    createIcon(props, SwitchVerticalReverse),
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

export default DefaultIcons;
