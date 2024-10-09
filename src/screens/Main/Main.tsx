import React from 'react';

import * as s from './style';
import TextComponent from '@components/Text';
import Button from '@components/Button';
import WeatherIcons from '@assets/icons/weather';
import CheckBoxIcons from '@assets/icons/checkBox';
import DefaultIcons from '@assets/icons/default';
import ArrowIcons from '@assets/icons/arrow';
import MusicIcons from '@assets/icons/music';

const Main = ({navigation}: {navigation: any}) => {
  return (
    <s.Container>
      <TextComponent fontType="bodyLarge">메인 화면</TextComponent>
      <Button.Default
        label="월간보기"
        onPress={() => navigation.navigate('TabNavigatorScreen')}
      />
      <s.ButtonWrapper>
        <s.OnlyTextLogo
          source={require('@assets/images/logo/onlyTextLogo.png')}
        />
        <s.SymbolLogo source={require('@assets/images/logo/symbolLogo.png')} />
      </s.ButtonWrapper>
      <s.ButtonWrapper>
        <Button.Default label="label" onPress={() => console.log('test')} />
        <Button.Default
          label="label"
          onPress={() => console.log('test')}
          disabled
        />
        <Button.Gradient
          label="label"
          onPress={() => navigation.navigate('loginStack')}
        />
      </s.ButtonWrapper>
      <s.IconsWrapper>
        <WeatherIcons.Sunny />
        <WeatherIcons.Cloudiness />
        <WeatherIcons.Cloudy />
        <WeatherIcons.Rain />
        <WeatherIcons.Snow />
        <WeatherIcons.Thunder />
      </s.IconsWrapper>
      <s.IconsWrapper>
        <CheckBoxIcons.Active />
        <CheckBoxIcons.InActive />
      </s.IconsWrapper>
      <s.IconsWrapper>
        <DefaultIcons.Close />
        <DefaultIcons.User />
        <DefaultIcons.Bell />
        <DefaultIcons.Send />
        <DefaultIcons.CircleAlert />
        <DefaultIcons.Refresh />
        <DefaultIcons.DotsHorizontal />
        <DefaultIcons.DotsVertical />
        <DefaultIcons.Setting />
        <DefaultIcons.BoardOrFeed />
        <DefaultIcons.Calendar />
        <DefaultIcons.Share />
        <DefaultIcons.Download />
        <DefaultIcons.Edit />
        <DefaultIcons.Delete />
        <DefaultIcons.Plus />
        <DefaultIcons.Search />
        <DefaultIcons.Favorite />
        <DefaultIcons.Filter />
        <DefaultIcons.SwitchVertical />
        <DefaultIcons.SwitchVerticalReverse />
      </s.IconsWrapper>
      <s.IconsWrapper>
        <ArrowIcons.ChevronLeft />
        <ArrowIcons.ChevronRight />
        <ArrowIcons.ChevronDown />
        <ArrowIcons.NarrowLeft />
      </s.IconsWrapper>
      <s.IconsWrapper>
        <MusicIcons.Play />
        <MusicIcons.PlayList />
        <MusicIcons.Recording />
        <MusicIcons.Repeat />
        <MusicIcons.Shuffle />
        <MusicIcons.SkipBack />
        <MusicIcons.SkipForward />
        <MusicIcons.Bookmark />
        <MusicIcons.ThumbsDown />
        <MusicIcons.ThumbsUp />
      </s.IconsWrapper>
    </s.Container>
  );
};

export default Main;
