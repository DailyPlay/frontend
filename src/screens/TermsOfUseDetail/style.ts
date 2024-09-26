import styled from '@emotion/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.color.white};
  padding: 0 24px;
  flex: 1;
  padding-bottom: 42px;
`;

export const SelectWrapper = styled.TouchableOpacity<{isDropdown: boolean}>`
  background-color: ${({theme}) => theme.color.neutral100};
  border-radius: 10px;
  padding: 10px 33px;
  align-self: flex-start;
  margin: 18px auto 16px auto;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: center;
  ${({isDropdown}) =>
    isDropdown
      ? 'border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;'
      : null};
  box-sizing: border-box;
  z-index: 1;
`;

export const IconButtonWrapper = styled.View``;

export const DetailScroll = styled.ScrollView``;

export const DropdownWrapper = styled.ScrollView`
  border: 1px solid ${({theme}) => theme.color.neutral100};
  position: absolute;
  width: 74.5%;
  top: 44px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  max-height: 120px;
  box-sizing: border-box;
  background-color: ${({theme}) => theme.color.white};
`;

export const DropdownItem = styled.TouchableOpacity<{isLast: boolean}>`
  flex: 1;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ${({isLast, theme}) =>
    isLast
      ? null
      : `border-bottom-color: ${theme.color.neutral100}; border-bottom-width: 1px;`};
`;
