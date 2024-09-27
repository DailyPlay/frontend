import React, {useState} from 'react';
import * as s from './style';
import TextComponent from '@components/Text';
import Button from '@components/Button';
import WeatherIcons from '@assets/icons/weather';
// import useModal from '@/hooks/useModal';
import {Pressable, Text} from 'react-native';
import DatePickerComponent from '@components/Modal/DatePicker';
import useModalUtils from '@utils/functions/modalUtils';
import useModal from '@hooks/useModal';

const Template = () => {
  const {networkErrorModal} = useModalUtils();
  const {show, hide, isVisible} = useModal();
  const [date, setDate] = useState(new Date());

  const handleChangeDate = (selcetedDate: Date) => {
    setDate(selcetedDate);
  };

  const handleConfirmDate = () => {
    // 날짜 선택 확인 시 로직을 추가합니다.
    console.log('Selected Date:', date);
    hide();
  };

  return (
    <s.Container>
      <TextComponent fontType="bodyLarge">테스팅</TextComponent>
      <Button.Default label="label" onPress={() => console.log('test')} />
      <Button.Gradient label="label" onPress={() => console.log('test')} />
      <s.IconsWrapper>
        <WeatherIcons.Sunny />
        <WeatherIcons.Cloudiness />
        <WeatherIcons.Cloudy />
        <WeatherIcons.Rain />
        <WeatherIcons.Snow />
        <WeatherIcons.Thunder />
      </s.IconsWrapper>
      <Pressable onPress={() => networkErrorModal(() => console.log('action'))}>
        <Text>모달</Text>
      </Pressable>
      <Pressable onPress={show}>
        <Text>날짜</Text>
      </Pressable>
      <DatePickerComponent
        isVisible={isVisible}
        hide={hide}
        date={date}
        handleChangeDate={handleChangeDate}
        onConfirmDate={handleConfirmDate}
      />
    </s.Container>
  );
};

export default Template;
