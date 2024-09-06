export interface IAgreementListType {
  label: string;
  isAgree: boolean;
  isRequired: boolean;
}

export interface IAgreementButtonType extends IAgreementListType {
  onPress: () => void;
}

export type ICheckBoxButton = {
  active?: boolean;
  onPress: () => void;
};
