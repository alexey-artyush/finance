export type RootStackParamList = {
  Home: undefined;
  'modal/add-transaction': undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
