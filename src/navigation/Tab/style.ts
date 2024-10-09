import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
`;

export const NavigatorContainer = styled.View`
  flex: 1;
  position: absolute;
  top: 60px;
  z-index: 5;
  width: 100%;
  height: 100%;
`;

export const TouchableOpacity = styled.TouchableOpacity<{focused: boolean}>`
  // width: ${({focused}) => (focused ? '160px' : '140px')};
  flex: 1;
  transition: all 0.3s ease;
  box-sizing: border-box;
`;

export const TabItem = styled.View<{focused: boolean}>`
  width: 100%;
  height: 100%;
  border-radius: ${({focused}) => (focused ? '50px' : '0px')};
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  box-sizing: border-box;
`;

export const TabLabel = styled.Text<{focused: boolean}>`
  color: ${({focused}) => (focused ? '#fff' : '#000')};
  font-size: 14px;
  font-weight: bold;
`;
