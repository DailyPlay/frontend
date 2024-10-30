import theme from '@theme/theme.ts';
import MusicIcons from '@assets/icons/music';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomPlayBarProps} from '@screens/Playlist/components/bottomPlayBarProps.ts';
import * as s from '@screens/Playlist/components/bottomPlayBarStyle.ts';
import MusicBox from '@components/Box/MusicBox.tsx';

const BottomPlayBar = ({song, playStatus}: BottomPlayBarProps) => {
  const insets = useSafeAreaInsets();
  console.log(insets);

  return (
    <s.BottomContainer
      style={{marginBottom: insets.bottom}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={[theme.color.white, '#EFEFFF']}>
      <s.ButtonWrapper>
        {Object.keys(song).length === 0 ? (
          <s.BottomIconWrapper>
            <MusicIcons.PlayGradient size={74} />
          </s.BottomIconWrapper>
        ) : (
          <s.MusicBoxWrapper>
            <MusicBox
              coverImg={
                'https://i.namu.wiki/i/KHZxgx6dilwr4Z7uu6wSPoVlf5aIb6rq6qIOBV2LYBYdN9cWFaLlvkggojNNTD6mrwtGxS_lTPh4Woge2hzuZQ.webp'
              }
              title={'라일락'}
              singer={'아이유'}
              children={<></>}
            />
            {playStatus === 'Playing' ? (
              <MusicIcons.PlayBigGradient size={44} />
            ) : (
              <MusicIcons.StopGradient size={44} />
            )}
          </s.MusicBoxWrapper>
        )}
      </s.ButtonWrapper>
    </s.BottomContainer>
  );
};

export default BottomPlayBar;
