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

export const LogoWrapper = styled.Image`
  margin-top: 56px;
  height: 195px;
`;

export const AgreementWrapper = styled.View`
  margin-top: 36px;
  padding: 0px 24px;
  gap: 12px;
`;

export const TotalAgreeBox = styled.View`
  background-color: ${({theme}) => theme.color.blue50};
  padding: 19px 16px;
  border-radius: 10px;
  flex-direction: row;
  gap: 8px;
`;

export const IconButtonWrapper = styled.TouchableOpacity``;

export const PartialAgreementWrapper = styled.View`
  padding: 5.5px 16px;
`;

export const PartialAgreementBox = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const PartialTextBox = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 2px;
`;

export const ContinueButtonBox = styled.View`
  margin-top: 40px;
  padding: 0 24px;
`;
