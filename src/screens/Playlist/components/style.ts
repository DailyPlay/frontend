import styled from '@emotion/native';

export const SongWrapper = styled.View`
  margin-bottom: 30px;
  gap: 6px;
`;

export const TagContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  width: 70%;
  height: 20px;
  padding-left: 24px;
  gap: 8px;
`;

export const TagBox = styled.View`
  height: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.color.gray50};
`;

export const RowGapWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const SpaceBetweenWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
