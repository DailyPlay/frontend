import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.white};
`;

export const TextWrapper = styled.View`
  padding: 0 24px;
  gap: 14px;
  margin-top: 52px;
`;

export const ImageWrapper = styled.Image`
  margin-top: 42px;
  object-fit: fill;
  width: 100%;
`;

export const IconWrapper = styled.View`
  flex-direction: row;
  gap: 24px;
  margin: 42px auto 0 auto;
`;

export const LoginIcon = styled.TouchableOpacity<{
  bgColor: string;
  border?: boolean;
}>`
  width: 56px;
  aspect-ratio: 1;
  border-radius: 56px;
  background-color: ${({bgColor}) => bgColor};
  justify-content: center;
  align-items: center;
  ${({border}) => (border ? 'border: 1px solid black' : null)};
`;

export const GuestTextBox = styled.TouchableOpacity`
  margin: 24px auto 0 auto;
`;
