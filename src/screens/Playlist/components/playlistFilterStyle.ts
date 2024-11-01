import styled from '@emotion/native';
import theme from '@theme/theme.ts';
import {fontStyle} from '@components/Text';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(34, 34, 34, 0.6);
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FilterModalContainer = styled.View`
  width: 100%;
  background-color: white;
  padding: 24px 22px 60px 22px;
  border-radius: 20px 20px 0 0;
  gap: 40px;
`;

export const FilterTypeWrapper = styled.View`
  gap: 18px;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
`;

export const FilterWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const DatePickerWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const TextInputBox = styled.TextInput`
  background-color: ${theme.color.neutral50};
  font-size: ${fontStyle.bodyLarge.fontSize};
  line-height: ${fontStyle.bodyLarge.lineHeight};
  font-weight: ${fontStyle.bodyLarge.fontWeight};
  text-align: center;
  padding: 0 25px;
  width: 148px;
  height: 60px;
  border-radius: 6px;
`;

export const FilterTextContainer = styled.TouchableOpacity<{
  useIcon?: boolean;
  checked?: boolean;
}>`
  padding: ${({useIcon}) => (useIcon ? '0 12px' : '0 20px')};
  border-color: ${({checked}) =>
    checked ? theme.color.blue800 : theme.color.gray500};
  background-color: ${({checked}) =>
    checked ? theme.color.blue50 : theme.color.white};
  border-width: 1px;
  border-radius: 17px;
  height: 34px;
  align-items: center;
  justify-content: center;
`;
