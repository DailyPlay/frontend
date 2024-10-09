import React, {useEffect, useState} from 'react';
import * as s from './style';
import CalendarUtils, {DateProps} from '@utils/functions/calendar';
import CalendarHeader from './CalendarHeader';
import WeekdayHeader from './WeekdayHeader';
import CalendarDate from './CalendarDate';

export interface SelectdDateProps {
  selectedYear: number;
  selectedMonth: number;
  selectedDate: number;
  isDiaryWritten: boolean;
}

const Calendar = () => {
  const calendarUtils = new CalendarUtils();

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState<DateProps[]>([]);
  const [isWeeklyView, setIsWeeklyView] = useState(false);
  const [weekdays, setWeekdays] = useState<DateProps[]>([]);

  const handleUpdateDate = () => {
    const updatedDate = calendarUtils.getCalendarDays({year, month});
    setDate(updatedDate);
  };

  const handleIncreseMonth = () => {
    setIsWeeklyView(false);
    const result = calendarUtils.increasetMonth({year, month});
    setYear(result.updatedYear);
    setMonth(result.updatedMonth);
    setDate(result.updatedDate);
  };

  const handleDecreseMonth = () => {
    setIsWeeklyView(false);
    const result = calendarUtils.decreasetMonth({year, month});
    setYear(result.updatedYear);
    setMonth(result.updatedMonth);
    setDate(result.updatedDate);
  };

  const handleRefreshToday = () => {
    setIsWeeklyView(false);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDate = calendarUtils.getCalendarDays({
      year: currentYear,
      month: currentMonth,
    });
    setYear(currentYear);
    setMonth(currentMonth);
    setDate(currentDate);
  };

  const handleSelectdDate = ({
    selectedYear,
    selectedMonth,
    selectedDate,
    isDiaryWritten,
  }: SelectdDateProps) => {
    const copyDate = [...date];
    setIsWeeklyView(isDiaryWritten);
    if (isDiaryWritten) {
      setWeekdays(
        calendarUtils.getWeeklyCalendar({
          selectedYear,
          selectedMonth,
          selectedDate,
          copyDate,
        }),
      );
    } else {
      const updateDate = copyDate.map(item => ({
        ...item,
        isSelected: item.month === selectedMonth && item.date === selectedDate,
      }));
      setDate(updateDate);
    }
  };

  useEffect(() => {
    handleUpdateDate();
  }, []);

  return (
    <s.Container>
      <CalendarHeader
        year={year}
        month={month}
        handleDecreseMonth={handleDecreseMonth}
        handleIncreseMonth={handleIncreseMonth}
        handleRefreshToday={handleRefreshToday}
      />
      <WeekdayHeader />
      <CalendarDate
        isWeeklyView={isWeeklyView}
        weekdays={weekdays}
        date={date}
        handleSelectdDate={handleSelectdDate}
      />
    </s.Container>
  );
};

export default Calendar;
