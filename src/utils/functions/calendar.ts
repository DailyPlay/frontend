export interface CalendarUtilsProps {
  year: number;
  month: number;
}

interface CurrentDateCheckProps extends CalendarUtilsProps {
  date: number;
}

export interface DateProps {
  year: number;
  month: number;
  date: number;
  isSelected: boolean;
  isDiaryWritten: boolean;
}

interface UpdatedDateProps {
  updatedYear: number;
  updatedMonth: number;
  updatedDate: DateProps[];
}

interface FindLastIndexProps {
  selectedDate: number;
  copyDate: DateProps[];
}

interface WeeklyCalendarProps extends FindLastIndexProps {
  selectedYear: number;
  selectedMonth: number;
}

class CalendarUtils {
  private currentDateCheck = ({year, month, date}: CurrentDateCheckProps) => {
    return (
      new Date().getFullYear() === year &&
      new Date().getMonth() + 1 === month &&
      new Date().getDate() === date
    );
  };

  public getCalendarDays({year, month}: CalendarUtilsProps): DateProps[] {
    const lastDate = new Date(year, month, 0).getDate();
    const lastDateOfLastMonth = this.getLastDayOfPreviousMonth({year, month});
    const firstDayOfMonth = this.getFirstDayOfMonth({year, month});
    const arrExtraDateOfLastMonth =
      firstDayOfMonth === 0
        ? []
        : Array.from({length: firstDayOfMonth}, (_, i) => ({
            year: month === 1 ? year - 1 : year,
            month: month === 1 ? 12 : month - 1,
            date: lastDateOfLastMonth - firstDayOfMonth + i,
            isSelected: false,
            isDiaryWritten: false,
          }));
    const arrDateOfMonth = Array.from({length: lastDate}, (_, i) => ({
      year,
      month,
      date: i + 1,
      isSelected: this.currentDateCheck({year, month, date: i + 1}),
      isDiaryWritten: true,
    }));
    return [...arrExtraDateOfLastMonth, ...arrDateOfMonth];
  }

  private getLastDayOfPreviousMonth({year, month}: CalendarUtilsProps): number {
    return new Date(year, month - 1, 0).getDate();
  }

  private getFirstDayOfMonth({year, month}: CalendarUtilsProps): number {
    return new Date(year, month - 1, 1).getDay();
  }

  public getWeeklyCalendar({
    selectedYear,
    selectedMonth,
    selectedDate,
    copyDate,
  }: WeeklyCalendarProps) {
    const getDay = new Date(
      selectedYear,
      selectedMonth - 1,
      selectedDate,
    ).getDay();
    const index = this.findLastIndex({selectedDate, copyDate});
    const startOfWeek = index - getDay;
    return copyDate.slice(startOfWeek, startOfWeek + 7).map(d => ({
      ...d,
      isSelected: d.date === selectedDate ? true : false,
    }));
  }

  private findLastIndex({selectedDate, copyDate}: FindLastIndexProps) {
    const lastIndex = copyDate.length - 1;
    for (let i = lastIndex; i >= 0; i--) {
      if (copyDate[i].date === selectedDate) {
        return i;
      }
    }
    return -1;
  }

  public increasetMonth = ({
    year,
    month,
  }: CalendarUtilsProps): UpdatedDateProps => {
    const updatedYear = month === 12 ? year + 1 : year;
    const updatedMonth = month === 12 ? 1 : month + 1;
    const updatedDate = this.getCalendarDays({
      year: updatedYear,
      month: updatedMonth,
    });
    return {updatedYear, updatedMonth, updatedDate};
  };

  public decreasetMonth = ({
    year,
    month,
  }: CalendarUtilsProps): UpdatedDateProps => {
    const updatedYear = month === 1 ? year - 1 : year;
    const updatedMonth = month === 1 ? 12 : month - 1;
    const updatedDate = this.getCalendarDays({
      year: updatedYear,
      month: updatedMonth,
    });
    return {updatedYear, updatedMonth, updatedDate};
  };
}

export default CalendarUtils;
