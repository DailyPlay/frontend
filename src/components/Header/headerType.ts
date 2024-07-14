export interface IStackHeaderBaseProps {
  isBackBtn?: boolean;
  isCloseBtn?: boolean;
  title?: string;
  navigation?: any;
}

interface IBackBtnProps extends IStackHeaderBaseProps {
  isBackBtn: true;
  onBackPress?: () => void;
}

interface INoBackBtnProps extends IStackHeaderBaseProps {
  isBackBtn?: false;
  onBackPress?: never;
}

interface ICloseBtnProps extends IStackHeaderBaseProps {
  isCloseBtn: true;
  onClosePress: () => void;
}

interface INoCloseBtnProps extends IStackHeaderBaseProps {
  isCloseBtn?: false;
  onClosePress?: never;
}

// 최종 타입 정의
export type IStackHeaderProps =
  | (IBackBtnProps & INoCloseBtnProps)
  | (IBackBtnProps & ICloseBtnProps)
  | (INoBackBtnProps & ICloseBtnProps)
  | (INoBackBtnProps & INoCloseBtnProps);
