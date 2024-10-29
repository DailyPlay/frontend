import React from 'react';
import * as s from './style';
import DefaultIcons from '@assets/icons/default';
import {MusicBoxProps} from '@components/Box/MusicBoxProps.ts';
import TextComponent from '@components/Text';
import theme from '@theme/theme.ts';

const MusicBox = (props: MusicBoxProps) => {
  const {title, coverImg, singer, children} = props;

  return (
    <s.Container>
      {coverImg ? (
        <s.CoverImg source={{uri: coverImg}} />
      ) : (
        <DefaultIcons.Empty size={40} />
      )}

      <s.SongTextWrapper>
        <s.SpaceBetweenWrapper>
          <TextComponent fontType={'bodyLarge'} color={theme.color.black}>
            {title}
          </TextComponent>
          {children}
        </s.SpaceBetweenWrapper>
        <TextComponent fontType={'bodyMedium'} color={theme.color.gray400}>
          {singer}
        </TextComponent>
      </s.SongTextWrapper>
    </s.Container>
  );
};

export default MusicBox;
