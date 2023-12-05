import { StackParamList } from '.';
import { AnimationLabStackParamList } from '../features/animation-lab/routes';
import { ReactiiveStackParamList } from '../features/reactiive/routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends StackParamList,
        ReactiiveStackParamList,
        AnimationLabStackParamList {}
  }
}
