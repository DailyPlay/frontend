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
  handleRefreshToday: () => void;
}

function CalendarHeader({
  year,
  month,
  handleDecreseMonth,
  handleIncreseMonth,
  handleRefreshToday,
}: CalendarHeaderProps) {
  return (
    <s.HeaderContainer>
      <s.HeaderTitleContainer>
        <s.HeaderDecreaseMonth onPress={handleDecreseMonth}>
          <ArrowIcons.ChevronLeft />
        </s.HeaderDecreaseMonth>
        <s.HeaderTitle>
          <s.HeaderTitleText>{`${year
            .toString()
            .slice(2)}년 ${month}월`}</s.HeaderTitleText>
        </s.HeaderTitle>
        <s.HeaderIncreaseMonth onPress={handleIncreseMonth}>
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
