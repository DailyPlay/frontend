import React from 'react';
import * as s from './style';

export type TabBarButtonProps = {
  route: {name: string};
  focused: boolean;
  onPress?: () => void;
};

const CustomTabBarLabel = ({route, focused, onPress}: TabBarButtonProps) => {
  return (
    <s.TouchableOpacity onPress={onPress} focused={focused}>
      <s.TabItem focused={focused}>
        <s.TabLabel focused={focused}>{route.name}</s.TabLabel>
      </s.TabItem>
    </s.TouchableOpacity>
  );
};

export default CustomTabBarLabel;
