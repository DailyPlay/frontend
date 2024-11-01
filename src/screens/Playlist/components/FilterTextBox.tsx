import theme from '@theme/theme.ts';
import TextComponent from '@components/Text';
import * as s from '@screens/Playlist/components/playlistFilterStyle.ts';
import React from 'react';

interface FilterTextBoxProps {
  checked: boolean;
  text: string;
  useIcon: boolean;
  children: React.ReactNode;
}

const FilterTextBox = ({
  checked,
  useIcon,
  text,
  children,
}: FilterTextBoxProps) => {
  return (
    <s.FilterTextContainer useIcon={useIcon} checked={checked}>
      {children}
      <TextComponent fontType={'bodyMedium'} color={theme.color.black}>
        {text}
      </TextComponent>
    </s.FilterTextContainer>
  );
};

export default FilterTextBox;
