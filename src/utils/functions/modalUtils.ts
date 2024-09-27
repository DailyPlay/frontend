import {useModal} from '@components/Modal/ModalContext';

import {
  diaryDeleteMessage,
  diaryExistingMessage,
  diaryInProgressMessage,
  diaryStopEditingMessage,
  guestDataDeleteMessage,
  musicReRecommendMessage,
  networkErrorMessage,
  newUpdateMessage,
  notificationsPermissionSettingsMessage,
  useNotificationsMessage,
  withdrawalMessage,
} from '@constants/modal';

type useModalUtilsProps = () => void;

const useModalUtils = () => {
  const {showModal, hideModal} = useModal();

  const networkErrorModal = (callback: useModalUtilsProps) => {
    showModal({
      title: networkErrorMessage.TITLE,
      messages: networkErrorMessage.CONTENTS,
      buttons: [
        {label: networkErrorMessage.BUTTONS.LABEL, onPress: hideModal},
        {label: 'Another Action', onPress: callback},
      ],
    });
  };

  const newUpdateModal = () => {
    showModal({
      title: newUpdateMessage.TITLE,
      messages: newUpdateMessage.CONTENTS,
      buttons: [{label: newUpdateMessage.BUTTONS.LABEL, onPress: hideModal}],
    });
  };

  const useNotificationsModal = (callback: useModalUtilsProps) => {
    showModal({
      title: useNotificationsMessage.TITLE,
      messages: useNotificationsMessage.CONTENTS,
      buttons: [
        {label: useNotificationsMessage.BUTTONS.LABEL1, onPress: hideModal},
        {
          label: useNotificationsMessage.BUTTONS.LABEL2,
          onPress: callback,
        },
      ],
    });
  };

  const notificationsPermissionSettingsModal = (
    callback: useModalUtilsProps,
  ) => {
    showModal({
      title: notificationsPermissionSettingsMessage.TITLE,
      messages: notificationsPermissionSettingsMessage.CONTENTS,
      buttons: [
        {
          label: notificationsPermissionSettingsMessage.BUTTONS.LABEL1,
          onPress: hideModal,
        },
        {
          label: notificationsPermissionSettingsMessage.BUTTONS.LABEL2,
          onPress: callback,
        },
      ],
    });
  };

  const diaryDeleteModal = (callback: useModalUtilsProps) => {
    showModal({
      title: diaryDeleteMessage.TITLE,
      messages: diaryDeleteMessage.CONTENTS,
      buttons: [
        {
          label: diaryDeleteMessage.BUTTONS.LABEL1,
          onPress: hideModal,
        },
        {
          label: diaryDeleteMessage.BUTTONS.LABEL2,
          onPress: callback,
        },
      ],
    });
  };

  const diaryExistingModal = (callback: useModalUtilsProps) => {
    showModal({
      title: diaryExistingMessage.TITLE,
      messages: diaryExistingMessage.CONTENTS,
      buttons: [
        {
          label: diaryExistingMessage.BUTTONS.LABEL1,
          onPress: hideModal,
        },
        {
          label: diaryExistingMessage.BUTTONS.LABEL2,
          onPress: callback,
        },
      ],
    });
  };

  const diaryStopEditingModal = (callback: useModalUtilsProps) => {
    showModal({
      title: diaryStopEditingMessage.TITLE,
      messages: diaryStopEditingMessage.CONTENTS,
      buttons: [
        {
          label: diaryStopEditingMessage.BUTTONS.LABEL1,
          onPress: hideModal,
        },
        {
          label: diaryStopEditingMessage.BUTTONS.LABEL2,
          onPress: callback,
        },
      ],
    });
  };

  const diaryInProgressModal = (callback: useModalUtilsProps) => {
    showModal({
      title: diaryInProgressMessage.TITLE,
      messages: diaryInProgressMessage.CONTENTS,
      buttons: [
        {
          label: diaryInProgressMessage.BUTTONS.LABEL1,
          onPress: hideModal,
        },
        {
          label: diaryInProgressMessage.BUTTONS.LABEL2,
          onPress: callback,
        },
      ],
    });
  };

  const musicReRecommendModal = (callback: useModalUtilsProps) => {
    showModal({
      title: musicReRecommendMessage.TITLE,
      messages: musicReRecommendMessage.CONTENTS,
      buttons: [
        {
          label: musicReRecommendMessage.BUTTONS.LABEL1,
          onPress: hideModal,
        },
        {
          label: musicReRecommendMessage.BUTTONS.LABEL2,
          onPress: callback,
        },
      ],
    });
  };

  const guestDataDeleteModal = (callback: useModalUtilsProps) => {
    showModal({
      title: guestDataDeleteMessage.TITLE,
      messages: guestDataDeleteMessage.CONTENTS,
      buttons: [
        {
          label: guestDataDeleteMessage.BUTTONS.LABEL1,
          onPress: hideModal,
        },
        {
          label: guestDataDeleteMessage.BUTTONS.LABEL2,
          onPress: callback,
        },
      ],
    });
  };

  const withdrawalModal = (callback: useModalUtilsProps) => {
    showModal({
      title: withdrawalMessage.TITLE,
      messages: withdrawalMessage.CONTENTS,
      buttons: [
        {
          label: withdrawalMessage.BUTTONS.LABEL1,
          onPress: hideModal,
        },
        {
          label: withdrawalMessage.BUTTONS.LABEL2,
          onPress: callback,
        },
      ],
    });
  };

  return {
    networkErrorModal,
    newUpdateModal,
    useNotificationsModal,
    notificationsPermissionSettingsModal,
    diaryDeleteModal,
    diaryExistingModal,
    diaryStopEditingModal,
    diaryInProgressModal,
    musicReRecommendModal,
    guestDataDeleteModal,
    withdrawalModal,
  };
};

export default useModalUtils;
