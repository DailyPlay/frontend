import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.white};
`;

export const FilterContainer = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.gray100};
`;

export const FilterWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 26px;
  border-radius: 33px;
  gap: 4px;
  border: 1px solid ${({theme}) => theme.color.gray500};
  background-color: ${({theme}) => theme.color.white};
`;

export const SongHeatherWrapper = styled.View`
  padding: 20px 24px;
`;

export const SongContainer = styled.ScrollView`
  padding: 0 24px;
`;

export const IconsWrapper = styled.View`
  gap: 4px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
export const SpaceBetweenWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
