import React from 'react';
import * as s from './style';

function WeekdayHeader() {
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <s.WeekdayHeader>
      {weekdays.map((day, index) => (
        <s.WeekdayHeaderText key={index}>{day}</s.WeekdayHeaderText>
      ))}
    </s.WeekdayHeader>
  );
}

export default WeekdayHeader;
