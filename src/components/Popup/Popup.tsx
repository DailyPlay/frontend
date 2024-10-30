import React, {useState, useRef} from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import * as s from './style';
import theme from '@theme/theme.ts';
import DefaultIcons from '@assets/icons/default';
import {popupType} from '@components/Popup/type.ts';

const Popup = ({children, popupWidth, visible, setVisible}: popupType) => {
  const [popupPosition, setPopupPosition] = useState<{
    top: number;
    left: number;
  }>({top: 0, left: 0});
  const buttonRef = useRef<TouchableOpacity | null>(null);

  const handleOpenPopup = () => {
    buttonRef.current?.measure(
      (
        fx: number,
        fy: number,
        width: number,
        height: number,
        px: number,
        py: number,
      ) => {
        setPopupPosition({
          top: py + height,
          left: px + width - popupWidth,
        });
        setVisible(true);
      },
    );
  };

  return (
    <View>
      <TouchableOpacity ref={buttonRef} onPress={handleOpenPopup}>
        <DefaultIcons.DotsHorizontal size={20} color={theme.color.gray500} />
      </TouchableOpacity>

      <Modal
        transparent
        visible={visible}
        animationType="none"
        onRequestClose={() => setVisible(false)}>
        <s.PopupContainer onPress={() => setVisible(false)}>
          <s.PopupWrapper
            style={[{top: popupPosition.top, left: popupPosition.left}]}>
            {children}
          </s.PopupWrapper>
        </s.PopupContainer>
      </Modal>
    </View>
  );
};

export default Popup;
