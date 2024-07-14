import styled from '@emotion/native';

export const Container = styled.View`
  border: 1px solid ${({theme}) => theme.color.black};
  padding: 10px;
`;
export const ButtonWrapper = styled.View`
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const IconsWrapper = styled.View`
  gap: 10px;
  flex-direction: row;
  margin-top: 10px;
  flex-wrap: wrap;
`;
export const OnlyTextLogo = styled.Image`
  width: 204px;
  height: 47px;
`;

export const SymbolLogo = styled.Image`
  width: 40px;
  height: 40px;
`;
