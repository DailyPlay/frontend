interface INavigateMenu {
  [key: string]: {
    headerTitle: string;
    name: string;
  };
}

export const loginStackMenu: INavigateMenu = {
  introduction: {headerTitle: '', name: 'introduction'},
  termsOfUse: {headerTitle: '', name: 'termsOfUse'},
  termsOfUseDetail: {headerTitle: '', name: 'termsOfUseDetail'},
  preference: {headerTitle: '', name: 'preference'},
};
