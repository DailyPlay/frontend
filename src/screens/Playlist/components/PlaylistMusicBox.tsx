import React from 'react';
import * as s from './style';
import theme from '@theme/theme.ts';
import {PlaylistMusicBoxProps} from '@screens/Playlist/components/PlaylistMusicBoxProps.ts';
import CheckBoxIcons from '@assets/icons/checkBox';
import DefaultIcons from '@assets/icons/default';
import MusicBox from '@components/Box/MusicBox';
import TextComponent from '@components/Text';

const PlaylistMusicBox = (props: PlaylistMusicBoxProps) => {
  const {check, title, coverImg, singer, diaryDtm, tag} = props;

  return (
    <s.SongWrapper>
      <s.RowGapWrapper>
        {check ? (
          <CheckBoxIcons.Active size={16} />
        ) : (
          <CheckBoxIcons.InActive size={16} color={theme.color.gray300} />
        )}
        <MusicBox
          title={title}
          coverImg={coverImg}
          singer={singer}
          children={
            <DefaultIcons.DotsHorizontal
              size={20}
              color={theme.color.gray500}
            />
          }
        />
      </s.RowGapWrapper>

      <s.SpaceBetweenWrapper>
        <s.TagContainer>
          {tag?.map((item, tagId) => (
            <s.TagBox key={tagId}>
              <TextComponent fontType={'bodySmall'} color={theme.color.black}>
                #{item}
              </TextComponent>
            </s.TagBox>
          ))}
        </s.TagContainer>
        <TextComponent fontType={'bodySmall'} color={theme.color.black}>
          {diaryDtm}
        </TextComponent>
      </s.SpaceBetweenWrapper>
    </s.SongWrapper>
  );
};

export default PlaylistMusicBox;
