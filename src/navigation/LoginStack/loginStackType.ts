import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

export type TLoginStackParamList = {
  introduction: undefined;
  termsOfUse: undefined;
  termsOfUseDetail: undefined;
  preference: undefined;
};

type TKeyLoginStack = keyof TLoginStackParamList;

export type TLoginNavigateMenu = {
  [key in TKeyLoginStack]: {
    headerTitle: string;
    name: any;
  };
};

export type LoginStackNavigationProp =
  NativeStackNavigationProp<TLoginStackParamList>;

export const loginStackMenu: TLoginNavigateMenu = {
  introduction: {headerTitle: '', name: 'introduction'},
  termsOfUse: {headerTitle: '', name: 'termsOfUse'},
  termsOfUseDetail: {headerTitle: '', name: 'termsOfUseDetail'},
  preference: {headerTitle: '', name: 'preference'},
};
