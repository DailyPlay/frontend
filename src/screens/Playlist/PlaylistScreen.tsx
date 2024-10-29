import React from 'react';
import * as s from './style';
import CheckBoxIcons from '@assets/icons/checkBox';
import DefaultIcons from '@assets/icons/default';
import theme from '@theme/theme.ts';
import PlaylistMusicBox from '@screens/Playlist/components/PlaylistMusicBox.tsx';
import TextComponent from '@components/Text';

const PlaylistScreen = () => {
  return (
    <s.Container>
      <s.FilterContainer>
        <s.FilterWrapper>
          <DefaultIcons.Filter size={15} />
          <TextComponent fontType={'bodyMedium'} color={theme.color.black}>
            필터
          </TextComponent>
        </s.FilterWrapper>
      </s.FilterContainer>

      <s.SongHeatherWrapper>
        <s.SpaceBetweenWrapper>
          <s.IconsWrapper>
            <CheckBoxIcons.InActive size={16} color={theme.color.gray300} />

            <TextComponent fontType={'bodyMedium'} color={theme.color.black}>
              전체 선택
            </TextComponent>
          </s.IconsWrapper>

          <s.IconsWrapper>
            <DefaultIcons.SwitchVertical size={16} />
            <TextComponent fontType={'bodyMedium'} color={theme.color.black}>
              저장순
            </TextComponent>
          </s.IconsWrapper>
        </s.SpaceBetweenWrapper>
      </s.SongHeatherWrapper>

      <s.SongContainer>
        <PlaylistMusicBox
          coverImg={
            'https://i.namu.wiki/i/KHZxgx6dilwr4Z7uu6wSPoVlf5aIb6rq6qIOBV2LYBYdN9cWFaLlvkggojNNTD6mrwtGxS_lTPh4Woge2hzuZQ.webp'
          }
          title={'라일락'}
          singer={'아이유'}
          diaryDtm={'24.05.01 외 1건'}
          check={true}
          tag={['태그1']}
        />
        <PlaylistMusicBox
          coverImg={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpFuNHcC8lhlHr_6Psct3WQfSmGb8BkXXsb0cO-exJUFw3FlYUWMs&usqp=CAE&s'
          }
          title={'Hype Boy'}
          singer={'뉴진스'}
          diaryDtm={'23.01.05'}
          check={false}
          tag={['태그입니다', 'tag', '기쁜', '즐거운']}
        />
        <PlaylistMusicBox
          coverImg={
            'https://i.namu.wiki/i/KHZxgx6dilwr4Z7uu6wSPoVlf5aIb6rq6qIOBV2LYBYdN9cWFaLlvkggojNNTD6mrwtGxS_lTPh4Woge2hzuZQ.webp'
          }
          title={'라일락'}
          singer={'아이유'}
          diaryDtm={'24.05.01 외 1건'}
          check={false}
          tag={['태그1']}
        />
        <PlaylistMusicBox
          coverImg={
            'https://i.namu.wiki/i/KHZxgx6dilwr4Z7uu6wSPoVlf5aIb6rq6qIOBV2LYBYdN9cWFaLlvkggojNNTD6mrwtGxS_lTPh4Woge2hzuZQ.webp'
          }
          title={'라일락'}
          singer={'아이유'}
          diaryDtm={'24.05.01 외 1건'}
          check={false}
          tag={['태그1']}
        />
        <PlaylistMusicBox
          coverImg={
            'https://i.namu.wiki/i/KHZxgx6dilwr4Z7uu6wSPoVlf5aIb6rq6qIOBV2LYBYdN9cWFaLlvkggojNNTD6mrwtGxS_lTPh4Woge2hzuZQ.webp'
          }
          title={'라일락'}
          singer={'아이유'}
          diaryDtm={'24.05.01 외 1건'}
          check={false}
          tag={['태그1']}
        />
      </s.SongContainer>
    </s.Container>
  );
};

export default PlaylistScreen;
