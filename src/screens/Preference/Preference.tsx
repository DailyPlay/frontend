import React, {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import * as s from './style';

// import component
import theme from '@/theme/theme';
import TextComponent from '@/components/Text';
import Button from '@/components/Button';

// import icon
import GenreSingleIcon from '@/assets/icons/genreSingle';
import GenreGradientIcons from '@/assets/icons/genreGradientIcon';
// import useModal from '@/hooks/useModal';

const Preference = () => {
  const [iconWidth, setIconWidth] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    const {layout} = e.nativeEvent;
    setIconWidth(Math.floor((layout.width - 20) / 3));
  };

  return (
    <s.Container>
      <s.SkipWrapper>
        <s.SkipButton>
          <TextComponent fontType="labelMedium" color={theme.color.neutral500}>
            건너뛰기
          </TextComponent>
        </s.SkipButton>
      </s.SkipWrapper>

      <s.TextWrapper>
        <TextComponent fontType="headlineSmall">
          {'ooo님은 어떤 장르를\n좋아하나요?'}
        </TextComponent>
        <TextComponent fontType="bodyLarge">
          {'마음에 쏙드는 추천을 위해\n선호하는 장르를 선택해주세요.'}
        </TextComponent>
      </s.TextWrapper>
      <s.SelectWrapper onLayout={onLayout}>
        <s.SelectContent>
          {Array.from({length: 12}, (_, i) => i).map(v => (
            <Icon key={v} width={iconWidth} />
          ))}
        </s.SelectContent>
      </s.SelectWrapper>

      <s.DescriptionWrapper>
        <TextComponent fontType="bodySmall">
          관심 장르는 나중에 다시 수정할 수 있어요!
        </TextComponent>
      </s.DescriptionWrapper>

      <Button.Gradient label="선택 완료" onPress={() => console.log('test')} />
    </s.Container>
  );
};

const Icon = ({width}: {width: number}) => {
  const isSelected = 1
    ? [theme.color.blue950, theme.color.blue500]
    : [theme.color.neutral100, theme.color.neutral100];

  const TestIcon = 1
    ? GenreSingleIcon['Ballad']({
        size: width / 2,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
      })
    : GenreGradientIcons['Ballad']({
        size: width / 2,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
      });

  return (
    <s.IconWrapper width={width}>
      <s.Gradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={isSelected}>
        {TestIcon}
        <TextComponent
          margin="auto auto 6px auto"
          fontType="titleSmall"
          color={1 ? theme.color.white : theme.color.black}>
          발라드
        </TextComponent>
      </s.Gradient>
    </s.IconWrapper>
  );
};

export default Preference;
