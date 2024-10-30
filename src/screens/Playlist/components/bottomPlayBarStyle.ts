import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';

export const BottomContainer = styled(LinearGradient)`
  position: relative;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  height: 86px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.color.black};
  overflow: visible;
`;

export const ButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  border-top-color: ${({theme}) => theme.color.gray100};
  border-top-width: 1px;
  width: 100%;
  height: 100%;
`;

export const BottomIconWrapper = styled.TouchableHighlight`
  position: absolute;
  top: -38px;
  justify-content: center;
  align-items: center;
`;

export const MusicBoxWrapper = styled.View`
  padding: 0 24px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
