import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { List } from '../features';
import { Route as AnimationLabRoutes } from '../features/animation-lab/routes';
import { Route as ReactiiveRoutes } from '../features/reactiive/routes';

export type StackParamList = {
  List: undefined;
  Reactiive: undefined;
  // https://www.youtube.com/@RNAnimationLab
  AnimationLab: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Reactiive" component={ReactiiveRoutes} />
        <Stack.Screen name="AnimationLab" component={AnimationLabRoutes} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
