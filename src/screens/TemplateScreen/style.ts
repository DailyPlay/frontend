import styled from '@emotion/native';

export const Container = styled.View`
  border: 1px solid ${({theme}) => theme.color.black};
  padding: 10px;
`;

export const IconsWrapper = styled.View`
  gap: 10px;
  flex-direction: row;
  margin-top: 10px;
`;
