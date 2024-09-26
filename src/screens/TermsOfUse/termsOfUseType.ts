export interface IAgreementListType {
  label: string;
  isAgree: boolean;
  isRequired: boolean;
}

export interface IAgreementButtonType extends IAgreementListType {
  onPress: () => void;
  navigation: any;
}

export type ICheckBoxButton = {
  active?: boolean;
  onPress: () => void;
};
