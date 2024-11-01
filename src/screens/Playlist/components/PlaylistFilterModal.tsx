import DefaultIcons from '@assets/icons/default';
import TextComponent from '@components/Text';
import theme from '@theme/theme.ts';
import React from 'react';
import Button from '@components/Button';
import * as s from '@screens/Playlist/components/playlistFilterStyle.ts';
import {Modal, TouchableOpacity} from 'react-native';
import FilterTextBox from '@screens/Playlist/components/FilterTextBox.tsx';

interface PlaylistFilterModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlaylistFilterModal = ({
  isVisible,
  setIsVisible,
}: PlaylistFilterModalProps) => {
  const genre = [
    {
      icon: '',
      genre: '발라드',
    },
    {
      icon: '',
      genre: 'K-pop',
    },
  ];

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <s.Container>
        <s.FilterModalContainer>
          <s.RowWrapper>
            <TextComponent fontType={'titleMedium'} color={theme.color.black}>
              필터
            </TextComponent>
            <TouchableOpacity onPress={handleCloseModal}>
              <DefaultIcons.Close size={24} />
            </TouchableOpacity>
          </s.RowWrapper>
          <s.FilterTypeWrapper>
            <TextComponent fontType={'labelLarge'} color={theme.color.black}>
              기간 선택
            </TextComponent>
            <s.FilterWrapper>
              <FilterTextBox
                checked={true}
                text={'1주'}
                useIcon={false}
                children={null}
              />
              <FilterTextBox
                checked={false}
                text={'1개월'}
                useIcon={false}
                children={null}
              />
              <FilterTextBox
                checked={true}
                text={'3개월'}
                useIcon={false}
                children={null}
              />
            </s.FilterWrapper>
            <s.DatePickerWrapper>
              <s.TextInputBox
                placeholder="YYYY.MM.DD"
                placeholderTextColor={theme.color.black}
              />
              <TextComponent fontType={'bodyLarge'} color={theme.color.black}>
                ~
              </TextComponent>
              <s.TextInputBox
                placeholder="YYYY.MM.DD"
                placeholderTextColor={theme.color.black}
              />
            </s.DatePickerWrapper>
          </s.FilterTypeWrapper>

          <s.FilterTypeWrapper>
            <TextComponent fontType={'labelLarge'} color={theme.color.black}>
              장르 선택
            </TextComponent>

            <s.FilterWrapper>
              {genre.map(item => (
                <FilterTextBox
                  checked={true}
                  text={item.genre}
                  useIcon={true}
                  children={item.icon}
                />
              ))}
            </s.FilterWrapper>
          </s.FilterTypeWrapper>

          <s.ButtonWrapper>
            <Button.Default
              width={'105%'}
              type={'Gray'}
              label={'초기화'}
              disabled={false}
              onPress={() => {
                console.log('reset');
              }}
            />
            <Button.Default
              width={'218%'}
              label={'적용'}
              disabled={false}
              onPress={() => {
                console.log('apply');
              }}
            />
          </s.ButtonWrapper>
        </s.FilterModalContainer>
      </s.Container>
    </Modal>
  );
};

export default PlaylistFilterModal;
