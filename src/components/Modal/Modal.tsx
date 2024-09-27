import React from 'react';
import styled from '@emotion/native';
import {Modal} from 'react-native';
import theme from '@theme/theme';
import TextComponent from '../Text';

export interface ModalComponentProps {
  isVisible: boolean;
  title: string;
  messages: readonly string[];
  buttons: {label: string; highlight?: boolean; onPress?: () => void}[];
}

function ModalComponent({
  isVisible,
  title,
  messages,
  buttons,
}: ModalComponentProps) {
  return (
    <Modal transparent visible={isVisible}>
      <StyledModalBackground>
        <StyledModalContainer onTouchEnd={e => e.stopPropagation()}>
          <StyledModalTitleContainer>
            <TextComponent fontType="titleMedium" color={theme.color.black}>
              {title}
            </TextComponent>
          </StyledModalTitleContainer>
          <StyleModalContentContainer>
            {messages.map((message, index) => (
              <TextComponent
                key={index}
                color={theme.color.gray900}
                fontType="titleSmall">
                {message}
              </TextComponent>
            ))}
          </StyleModalContentContainer>
          <StyleModalButtonsContainer>
            {buttons.map((button, index) => (
              <StyledModalButton onPress={button.onPress} key={index}>
                <TextComponent
                  fontType="buttonMedium"
                  color={
                    button.highlight ?? true
                      ? theme.color.blue800
                      : theme.color.neutral400
                  }>
                  {button.label}
                </TextComponent>
              </StyledModalButton>
            ))}
          </StyleModalButtonsContainer>
        </StyledModalContainer>
      </StyledModalBackground>
    </Modal>
  );
}

const StyledModalBackground = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(34, 34, 34, 0.6);
`;

const StyledModalContainer = styled.View`
  width: 268px;
  background-color: ${theme.color.white};
  margin: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const StyledModalTitleContainer = styled.View`
  padding-top: 20px;
  padding-bottom: 10px;
`;

const StyleModalContentContainer = styled.View`
  align-items: center;
  padding-horizontal: 20px;
  padding-bottom: 20px;
`;

const StyleModalButtonsContainer = styled.View`
  flex-direction: row;
  box-sizing: border-box;
  border-top-width: 0.2px;
  border-color: ${theme.color.neutral100};
`;

const StyledModalButton = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-vertical: 15px;

  &:first-of-type {
    border-left-width: 0.2px;
    border-color: ${theme.color.neutral100};
  }
`;

export default ModalComponent;
