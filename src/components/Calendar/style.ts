import theme from '@theme/theme';
import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  background: ${theme.color.white};
  padding-horizontal: 23px;
`;

export const HeaderContainer = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-vertical: 10px;
  padding-horizontal: 10px;
`;
export const HeaderTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const HeaderTitle = styled.Pressable``;
export const HeaderTitleText = styled.Text``;
export const HeaderIncreaseMonth = styled.Pressable``;
export const HeaderDecreaseMonth = styled.Pressable``;
export const HeaderTodayContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 20px;
`;
export const HeaderToday = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const HeaderTodayText = styled.Text``;

export const WeekdayHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-vertical: 18px;
  box-sizing: border-box;
`;
export const WeekdayHeaderText = styled.Text`
  flex: 1;
  text-align: center;
  width: 14%;
  box-sizing: border-box;
`;

export const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const Date = styled.Pressable`
  display: flex;
  flex-basis: 14.2%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  margin-bottom: 20px;
  gap: 4px;
  padding-left: 5px;
`;
export const DateIconBox = styled.View<{isSelected: boolean}>`
  widht: 44px;
  height: 44px;
  border: ${({isSelected}) =>
    isSelected ? `2px solid ${theme.color.blue800}` : 'none'};
  border-radius: 22px;
`;

export const DateText = styled.Text``;
