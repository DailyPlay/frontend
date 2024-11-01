import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';

export const ButtonContainer = styled.TouchableOpacity<{
  disabled?: boolean;
  width?: number | string;
  type?: string;
}>`
  border-radius: 10px;
  padding: 19px 0;
  width: ${({width}) => (width ? width : '100%')};
  background-color: ${({theme, disabled, type}) =>
    type === 'Gray'
      ? theme.color.white
      : disabled
      ? theme.color.neutral200
      : theme.color.blue900};
  border-width: ${({type}) => (type === 'Gray' ? '2px' : 0)};
  border-color: ${({theme}) => theme.color.neutral500};
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
`;

export const GradientContainer = styled.TouchableOpacity`
  border-radius: 10px;
`;

export const GradientBox = styled(LinearGradient)`
  padding: 19px 0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
