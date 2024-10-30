import {ReactNode, Dispatch, SetStateAction} from 'react';

export interface popupType {
  popupWidth: number;
  children: ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
