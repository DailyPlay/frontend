import React from 'react';
import styled from '@emotion/native';
import {Modal, Pressable} from 'react-native';
import theme from '@theme/theme';
import DatePicker from 'react-native-date-picker';
import CloseIcons from '@assets/icons/x-close.svg';
import TextComponent from '../Text';
import Button from '../Button';

interface DatePickerComponentProps {
  isVisible: boolean;
  hide: () => void;
  date: Date;
  handleChangeDate: (date: Date) => void;
  onConfirmDate: () => void;
  title?: string;
  mode?: 'date' | 'time' | 'datetime';
}

const DatePickerComponent = ({
  isVisible,
  hide,
  date,
  handleChangeDate,
  onConfirmDate,
  title = '날짜 선택',
  mode = 'date',
}: DatePickerComponentProps) => {
  return (
    <Modal transparent visible={isVisible} animationType={'none'}>
      <StyledModalBackground>
        <StyledModalContainer>
          <StyledModalHeader>
            <TextComponent fontType="titleMedium" color={theme.color.black}>
              {title}
            </TextComponent>
            <Pressable onPress={hide}>
              <CloseIcons />
            </Pressable>
          </StyledModalHeader>
          <StyledPickerContainer>
            <DatePicker
              mode={mode}
              date={date}
              onDateChange={handleChangeDate}
              locale="ko"
            />
          </StyledPickerContainer>
          <Button.Default label={'변경하기'} onPress={onConfirmDate} />
        </StyledModalContainer>
      </StyledModalBackground>
    </Modal>
  );
};

export default DatePickerComponent;

const StyledModalBackground = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(34, 34, 34, 0.6);
`;

const StyledModalContainer = styled.View`
  background-color: ${theme.color.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  padding-horizontal: 25px;
  padding-vertical: 25px;
`;

const StyledModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledPickerContainer = styled.View`
  align-items: center;
`;
