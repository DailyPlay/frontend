import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.white};
  padding: 0 24px;
`;

export const SkipWrapper = styled.View`
  margin-top: 24px;
`;

export const SkipButton = styled.TouchableOpacity`
  align-self: flex-start;
  margin: 0 0 0 auto;
`;

export const TextWrapper = styled.View<{margin?: string}>`
  margin-top: 13px;
  flex-direction: column;
  gap: 16px;
`;

export const SelectWrapper = styled.ScrollView`
  margin-top: 20px;
  flex-grow: 0;
`;

export const SelectContent = styled.View`
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.TouchableOpacity<{width?: number}>`
  border-radius: 10px;
  background-color: ${({theme}) => theme.color.neutral100};
  width: ${({width}) => `${width}`}px;
  aspect-ratio: 1;
  height: 120px;
  overflow: hidden;
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
  padding-top: 14px;
`;

export const DescriptionWrapper = styled.View`
  align-items: center;
  margin: auto 0 14px;
`;
