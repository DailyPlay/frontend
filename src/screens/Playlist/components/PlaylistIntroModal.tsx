import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native';
import * as s from './playlistIntroModalStyle.ts';
import DefaultIcons from '@assets/icons/default';
import Button from '@components/Button';
import TextComponent from '@components/Text';

const PlaylistIntroModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const modalImage = require('@assets/images/playlistModalImage.png');

  useEffect(() => {
    if (!isVisible) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <Modal transparent={true} visible={isVisible} animationType="fade">
      <s.ModalContainer>
        <s.ModalWrapper>
          <s.CloseButton onPress={handleClose}>
            <DefaultIcons.Close size={24} />
          </s.CloseButton>
          <s.ModalImage source={modalImage} resizeMode="contain" />
          <TextComponent fontType={'titleMedium'}>
            이달의 노래를 들어볼까요?
          </TextComponent>
          <s.BottomTextWrapper>
            <TextComponent fontType={'bodyMedium'}>
              이번달에 저장한 노래를 들어보며
            </TextComponent>
            <TextComponent fontType={'bodyMedium'}>
              이번달을 돌아볼까요?
            </TextComponent>
          </s.BottomTextWrapper>
          <Button.Default
            label={'노래 듣기'}
            disabled={false}
            onPress={() => {
              console.log('music start');
            }}
          />
        </s.ModalWrapper>
      </s.ModalContainer>
    </Modal>
  );
};

export default PlaylistIntroModal;
