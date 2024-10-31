import styled from '@emotion/native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 22px;
`;

export const ModalWrapper = styled.View`
  background-color: white;
  padding: 22px 24px 30px 20px;
  width: 100%;
  border-radius: 20px;
  align-items: center;
  position: relative;
`;

export const ModalImage = styled.Image`
  width: 100%;
  height: auto;
  aspect-ratio: 282/208;
  margin-bottom: 30px;
`;

export const BottomTextWrapper = styled.View`
  margin: 8px 0 32px 0;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const ActionButton = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  background-color: #ddd;
  margin: 5px;
  border-radius: 5px;
  align-items: center;
`;
