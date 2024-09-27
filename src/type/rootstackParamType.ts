import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

type RootStackParamList = {
  introduction: undefined;
  termsOfUse: undefined;
  termsOfUseDetail: undefined;
  preference: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
