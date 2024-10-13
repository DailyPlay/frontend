import React from 'react';
import * as s from './style';
import ArrowIcons from '@assets/icons/arrow';
import DefaultIcons from '@assets/icons/default';
import {CalendarUtilsProps} from '@utils/functions/calendar';

interface CalendarHeaderProps extends CalendarUtilsProps {
  year: number;
  month: number;
  handleDecreseMonth: () => void;
  handleIncreseMonth: () => void;
  handleIncreaseWeek: () => void;
  handleDecreaseWeek: () => void;
  handleRefreshToday: () => void;
  isWeeklyView?: boolean;
  show: () => void;
}

function CalendarHeader({
  year,
  month,
  handleDecreseMonth,
  handleIncreseMonth,
  handleIncreaseWeek,
  handleDecreaseWeek,
  handleRefreshToday,
  isWeeklyView = false,
  show,
}: CalendarHeaderProps) {
  return (
    <s.HeaderContainer>
      <s.HeaderTitleContainer>
        <s.HeaderDecreaseMonth
          onPress={isWeeklyView ? handleDecreaseWeek : handleDecreseMonth}>
          <ArrowIcons.ChevronLeft />
        </s.HeaderDecreaseMonth>
        <s.HeaderTitle onPress={show}>
          <s.HeaderTitleText>{`${year
            .toString()
            .slice(2)}년 ${month}월`}</s.HeaderTitleText>
        </s.HeaderTitle>
        <s.HeaderIncreaseMonth
          onPress={isWeeklyView ? handleIncreaseWeek : handleIncreseMonth}>
          <ArrowIcons.ChevronRight />
        </s.HeaderIncreaseMonth>
      </s.HeaderTitleContainer>
      <s.HeaderTodayContainer>
        <s.HeaderToday onPress={handleRefreshToday}>
          <DefaultIcons.Refresh />
          <s.HeaderTodayText>Today</s.HeaderTodayText>
        </s.HeaderToday>
      </s.HeaderTodayContainer>
    </s.HeaderContainer>
  );
}

export default CalendarHeader;
