import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';

export const ButtonContainer = styled.TouchableOpacity<{disabled?: boolean}>`
  width: 100%;
  border-radius: 10px;
  padding: 19px 0;
  background-color: ${({theme, disabled}) =>
    disabled ? theme.color.neutral200 : theme.color.blue900};
  justify-content: center;
  align-items: center;
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
