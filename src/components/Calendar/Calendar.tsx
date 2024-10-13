import React, {useEffect, useState} from 'react';
import * as s from './style';
import CalendarUtils, {DateProps} from '@utils/functions/calendar';
import CalendarHeader from './CalendarHeader';
import WeekdayHeader from './WeekdayHeader';
import CalendarDate from './CalendarDate';
import DatePickerComponent from '../Modal/DatePicker';
import useModal from '@hooks/useModal';

export interface SelectdDateProps {
  selectedYear: number;
  selectedMonth: number;
  selectedDate: number;
  isDiaryWritten: boolean;
}

interface CalendarDateProps {
  year: number;
  month: number;
  date: DateProps[];
}

const Calendar = () => {
  const calendarUtils = new CalendarUtils();
  const [calendarDate, setCalendarDate] = useState<CalendarDateProps>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: [],
  });
  const [calendarSelectedDate, setCalendarSelectedDate] =
    useState<SelectdDateProps | null>(null);

  const [isWeeklyView, setIsWeeklyView] = useState(false);
  const [weekdays, setWeekdays] = useState<DateProps[]>([]);

  const {show, hide, isVisible} = useModal();
  const [date, setDate] = useState(new Date());

  const handleChangeDate = (selcetedDate: Date) => {
    setDate(selcetedDate);
  };

  const handleConfirmDate = () => {
    const newDate = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
    );
    setCalendarDate({
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      date: calendarUtils
        .getCalendarDays({
          year: newDate.getFullYear(),
          month: newDate.getMonth() + 1,
        })
        .map(item => ({
          ...item,
          isSelected:
            item.year === newDate.getFullYear() &&
            item.month === newDate.getMonth() + 1 &&
            item.date === newDate.getDate(),
        })),
    });
    setCalendarSelectedDate({
      selectedYear: newDate.getFullYear(),
      selectedMonth: newDate.getMonth() + 1,
      selectedDate: newDate.getDate(),
      isDiaryWritten: false,
    });
    // setCalendarDate({})
    hide();
  };

  const handleUpdateDate = () => {
    const {year, month} = calendarDate;
    const updateDate = calendarUtils.getCalendarDays({year, month});
    setCalendarDate(prev => ({
      ...prev,
      date: updateDate,
    }));
  };

  const handleIncreseMonth = () => {
    setIsWeeklyView(false);
    const {year, month} = calendarDate;
    const result = calendarUtils.increasetMonth({year, month});
    setCalendarDate({
      year: result.updatedYear,
      month: result.updatedMonth,
      date: result.updatedDate,
    });
  };

  const handleDecreseMonth = () => {
    setIsWeeklyView(false);
    const {year, month} = calendarDate;
    const result = calendarUtils.decreasetMonth({year, month});
    setCalendarDate({
      year: result.updatedYear,
      month: result.updatedMonth,
      date: result.updatedDate,
    });
  };

  const handleIncreaseWeek = () => {
    const {year, month} = calendarDate;
    const result = calendarUtils.increaseWeek({
      selectedYear: year,
      selectedMonth: month,
      selectedDate: calendarSelectedDate?.selectedDate as number,
      copyDate: [...calendarDate.date],
    });
    setCalendarDate(prev => ({
      year: result[0].year,
      month: result[0].month,
      date:
        prev.year === result[0].year && prev.month === result[0].month
          ? prev.date
          : calendarUtils.getCalendarDays({
              year: result[0].year,
              month: result[0].month,
            }),
    }));
    setCalendarSelectedDate({
      selectedYear: result[0].year,
      selectedMonth: result[0].month,
      selectedDate: result[0].date,
      isDiaryWritten: result[0].isDiaryWritten,
    });
    setWeekdays(result);
  };

  const handleDecreaseWeek = () => {
    const {year, month} = calendarDate;
    const result = calendarUtils.decreaseWeek({
      selectedYear: year,
      selectedMonth: month,
      selectedDate: calendarSelectedDate?.selectedDate as number,
      copyDate: [...calendarDate.date],
    });
    setCalendarDate(prev => ({
      year: result[0].year,
      month: result[0].month,
      date:
        prev.year === result[0].year && prev.month === result[0].month
          ? prev.date
          : calendarUtils.getCalendarDays({
              year: result[0].year,
              month: result[0].month,
            }),
    }));
    setCalendarSelectedDate({
      selectedYear: result[0].year,
      selectedMonth: result[0].month,
      selectedDate: result[0].date,
      isDiaryWritten: result[0].isDiaryWritten,
    });
    setWeekdays(result);
  };

  const handleRefreshToday = () => {
    setIsWeeklyView(false);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDate = calendarUtils.getCalendarDays({
      year: currentYear,
      month: currentMonth,
    });
    setCalendarDate({
      year: currentYear,
      month: currentMonth,
      date: currentDate,
    });
  };

  const handleSelectdDate = ({
    selectedYear,
    selectedMonth,
    selectedDate,
    isDiaryWritten,
  }: SelectdDateProps) => {
    // TODO 여기 isDiaryWritten 부분은 백엔드에서 데이터 받으면 처리하기
    // console.log(selectedYear, selectedMonth, selectedDate, isDiaryWritten);
    // console.log(calendarDate.year, calendarDate.month);

    setCalendarSelectedDate({
      selectedYear,
      selectedMonth,
      selectedDate,
      isDiaryWritten,
    });

    const copyDate =
      calendarDate.year === selectedYear && calendarDate.month === selectedMonth
        ? [...calendarDate.date]
        : [
            ...calendarUtils.getCalendarDays({
              year: selectedYear,
              month: selectedMonth,
            }),
          ];
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
    }
    const updateDate = copyDate.map(item => ({
      ...item,
      isSelected:
        item.year === selectedYear &&
        item.month === selectedMonth &&
        item.date === selectedDate,
    }));
    setCalendarDate({
      year: selectedYear,
      month: selectedMonth,
      date: updateDate,
    });
  };

  useEffect(() => {
    handleUpdateDate();
  }, []);

  return (
    <s.Container>
      <CalendarHeader
        year={calendarDate.year}
        month={calendarDate.month}
        handleDecreseMonth={handleDecreseMonth}
        handleIncreseMonth={handleIncreseMonth}
        handleIncreaseWeek={handleIncreaseWeek}
        handleDecreaseWeek={handleDecreaseWeek}
        handleRefreshToday={handleRefreshToday}
        isWeeklyView={isWeeklyView}
        show={show}
      />
      <WeekdayHeader />
      <CalendarDate
        isWeeklyView={isWeeklyView}
        weekdays={weekdays}
        date={calendarDate.date}
        handleSelectdDate={handleSelectdDate}
        calendarSelectedDate={calendarSelectedDate}
      />
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

export default Calendar;
