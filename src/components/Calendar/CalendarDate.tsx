import React from 'react';
import * as s from './style';
import {DateProps} from '@utils/functions/calendar';
import {SelectdDateProps} from './Calendar';
import DefaultIcons from '@assets/icons/default';
import Button from '../Button';

interface CalendarDateProps {
  isWeeklyView: boolean;
  weekdays: DateProps[];
  date: DateProps[];
  handleSelectdDate: ({
    selectedYear,
    selectedMonth,
    selectedDate,
    isDiaryWritten,
  }: SelectdDateProps) => void;
  calendarSelectedDate: SelectdDateProps | null;
}
function CalendarDate({
  isWeeklyView,
  weekdays,
  date,
  handleSelectdDate,
  calendarSelectedDate,
}: CalendarDateProps) {
  return (
    <s.DateContainer>
      {isWeeklyView && weekdays.length > 0
        ? weekdays.map(d => (
            <s.Date
              key={`${d.year}-${d.month}-${d.date}`}
              onPress={() =>
                handleSelectdDate({
                  selectedYear: d.year,
                  selectedMonth: d.month,
                  selectedDate: d.date,
                  isDiaryWritten: d.isDiaryWritten,
                })
              }>
              <s.DateIconBox isSelected={d.isSelected}>
                <DefaultIcons.Empty size={40} />
              </s.DateIconBox>
              <s.DateText>{d.date}</s.DateText>
            </s.Date>
          ))
        : date.map(d => (
            <s.Date
              key={`${d.year}-${d.month}-${d.date}`}
              onPress={() =>
                handleSelectdDate({
                  selectedYear: d.year,
                  selectedMonth: d.month,
                  selectedDate: d.date,
                  isDiaryWritten: d.isDiaryWritten,
                })
              }>
              <s.DateIconBox isSelected={d.isSelected}>
                <DefaultIcons.Empty size={40} />
              </s.DateIconBox>
              <s.DateText>{d.date}</s.DateText>
            </s.Date>
          ))}
      {!calendarSelectedDate?.isDiaryWritten && (
        <s.ButtonWrapper>
          <Button.Gradient
            label="일기쓰기"
            onPress={() => console.log('Press')}
          />
        </s.ButtonWrapper>
      )}
    </s.DateContainer>
  );
}

export default CalendarDate;
