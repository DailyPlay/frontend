import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import * as s from './style';
import theme from '@theme/theme.ts';
import {PlaylistMusicBoxProps} from '@screens/Playlist/components/PlaylistMusicBoxProps.ts';
import CheckBoxIcons from '@assets/icons/checkBox';
import DefaultIcons from '@assets/icons/default';
import MusicIcons from '@assets/icons/music';
import MusicBox from '@components/Box/MusicBox';
import TextComponent from '@components/Text';
import Popup from '@components/Popup/Popup.tsx';

const PlaylistMusicBox = (props: PlaylistMusicBoxProps) => {
  const {check, title, coverImg, singer, diaryDtm, tag} = props;
  const [visible, setVisible] = useState<boolean>(false);

  const handlePlayNext = () => {
    setVisible(false);
  };

  const handleAddToPlaylist = () => {
    setVisible(false);
  };

  const handleViewDiary = () => {
    setVisible(false);
  };

  const buttonItems = [
    {
      icon: <MusicIcons.Play size={24} />,
      text: '다음에 재생',
      function: handlePlayNext,
    },
    {
      icon: <MusicIcons.PlayList size={24} />,
      text: '재생목록에 추가',
      function: handleAddToPlaylist,
    },
    {
      icon: <DefaultIcons.Calendar size={24} />,
      text: '일기 보기',
      style: {borderWidth: 0},
      function: handleViewDiary,
    },
  ];

  return (
    <TouchableOpacity onPress={() => console.log('Check!')}>
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
              <Popup
                visible={visible}
                setVisible={setVisible}
                popupWidth={160}
                children={buttonItems.map(item => (
                  <s.ButtonWrapper
                    key={item.text}
                    style={item.style}
                    onPress={item.function}>
                    {item.icon}
                    <TextComponent
                      fontType="bodyMedium"
                      color={theme.color.black}>
                      {item.text}
                    </TextComponent>
                  </s.ButtonWrapper>
                ))}
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
    </TouchableOpacity>
  );
};

export default PlaylistMusicBox;
