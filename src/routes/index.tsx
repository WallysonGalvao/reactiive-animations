import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { List } from '../features';
import { Route as ReactiiveRoutes } from '../features/reactiive/routes';

export type StackParamList = {
  List: undefined;
  Reactiive: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Reactiive" component={ReactiiveRoutes} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
