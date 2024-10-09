import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';

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

export const GradientHeader = styled(LinearGradient)<{insets: {top: number}}>`
  padding: 10px 24px;
  height: 126px;
  z-index: -1;
`;

export const HeaderWrapper = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const HeaderButtons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TabContainer = styled.View``;

export const DiaryTab = styled.TouchableOpacity``;

export const PlaylistTab = styled.TouchableOpacity``;
