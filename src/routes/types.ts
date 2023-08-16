import { StackParamList } from '.';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
