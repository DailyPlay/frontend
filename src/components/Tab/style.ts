import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
`;

export const NavigatorContainer = styled.View`
  flex: 1;
  position: absolute;
  top: 50px;
  z-index: 5;
  width: 100%;
  height: 100%;
`;

export const TouchableOpacity = styled.TouchableOpacity<{focused: boolean}>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  box-sizing: border-box;
  width: 100%;
  height: 48px;
`;

export const TabItem = styled.View<{focused: boolean}>`
  height: 48px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  box-sizing: border-box;
`;

export const TabLabel = styled.Text<{focused: boolean}>`
  color: ${({focused}) =>
    focused ? '#fff' : '#000'}; // Focused 상태에 따라 글자색 조절
  font-size: ${({focused}) =>
    focused ? '16px' : '14px'}; // Focused 상태에 따라 글자 크기 조절
  font-weight: bold;
`;
