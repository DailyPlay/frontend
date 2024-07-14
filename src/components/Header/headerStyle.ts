import styled from '@emotion/native';

export const HeaderContainer = styled.View<{padding?: string; left?: boolean}>`
  justify-content: ${({left}) => (left ? 'flex-start' : 'center')};
  align-items: center;
  padding: ${({padding}) => (padding ? padding : '11px 0px')};
  position: relative;
  flex-direction: row;
  background-color: ${({theme}) => theme.color.white};
`;

export const BackButtonBox = styled.TouchableOpacity`
  position: absolute;
  left: 28px;
`;

export const CloseButtonBox = styled.TouchableOpacity`
  position: absolute;
  right: 28px;
`;

export const HeaderLogo = styled.Image<{left?: boolean}>`
  width: 130px;
  height: 26px;
`;
