import React, {createContext, ReactNode, useContext, useState} from 'react';
import ModalComponent, {ModalComponentProps} from './Modal';

type ModalProviderProps = {
  children: ReactNode;
};

type showModalProps = Omit<ModalComponentProps, 'isVisible'>;

interface ModalContextType {
  showModal: (props: showModalProps) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({children}: ModalProviderProps) => {
  const [modalProps, setModalProps] = useState<ModalComponentProps>({
    isVisible: false,
    title: '',
    messages: [],
    buttons: [],
  });

  const showModal = ({title, messages, buttons}: showModalProps) => {
    setModalProps({isVisible: true, title, messages, buttons});
  };

  const hideModal = () => {
    setModalProps(prevState => ({...prevState, isVisible: false}));
  };

  return (
    <ModalContext.Provider value={{showModal, hideModal}}>
      {children}
      <ModalComponent {...modalProps} />
    </ModalContext.Provider>
  );
};

const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export {ModalProvider, useModal};
