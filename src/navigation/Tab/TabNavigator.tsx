import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DefaultIcons from '@assets/icons/default';
import MusicIcons from '@assets/icons/music';
import CustomTabBarLabel, {
  TabBarButtonProps,
} from '@components/Tab/CustomTabBarLabel';
import DiaryScreen from '@screens/Diary';
import PlaylistScreen from '@screens/Playlist';
import * as s from './style';

const Tab = createMaterialTopTabNavigator();
const CustomTabBarButton = ({route, focused, onPress}: TabBarButtonProps) => (
  <CustomTabBarLabel route={route} focused={focused} onPress={onPress} />
);
const DiaryIcon = () => (<DefaultIcons.Diary />) as React.ReactNode;
const SelectedDiaryIcon = () =>
  (<DefaultIcons.SelectedDiary />) as React.ReactNode;
const PlaylistIcon = () => (<MusicIcons.PlayList2 />) as React.ReactNode;
const SelectedPlaylistIcon = () =>
  (<MusicIcons.SelectedPlayList2 />) as React.ReactNode;

const TabNavigator = () => {
  return (
    <s.Container>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#fff',
            borderRadius: 100,
            width: 300,
            alignSelf: 'center',
            marginBottom: 20,
            padding: 0,
            margin: 0,
            boxSizing: 'border-box',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#000',
            height: 48,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          tabBarItemStyle: {
            width: 150,
            height: 48,
            display: 'flex',
            flexDirection: 'row',
          },
          tabBarContentContainerStyle: {
            justifyContent: 'center',
          },
          tabBarIcon: ({focused}) => {
            if (route.name === '다이어리') {
              return focused ? SelectedDiaryIcon() : DiaryIcon();
            } else if (route.name === '플레이리스트') {
              return focused ? SelectedPlaylistIcon() : PlaylistIcon();
            }
          },
          tabBarLabel: ({focused}) => CustomTabBarButton({route, focused}),
        })}>
        <Tab.Screen name="다이어리" component={DiaryScreen} />
        <Tab.Screen name="플레이리스트" component={PlaylistScreen} />
      </Tab.Navigator>
    </s.Container>
  );
};

export default TabNavigator;
