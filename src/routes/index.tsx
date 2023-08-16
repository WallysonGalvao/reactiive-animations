import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Introduction } from '../screens/00-introduction-to-reanimated-2';
import { PanGestureBasics } from '../screens/01-pan-gesture-handler-basics';
import { AnimatedScrollView } from '../screens/02-interpolate-with-scrollview';
import { InterporlateColors } from '../screens/03-interpolate-color';
import { PinchGestureHandlerBasics } from '../screens/04-pinch-gesture-handler-basics';
import { DoubleTapGestureHandler } from '../screens/05-double-tap-gesture-handler';
import { List } from '../screens/List';

export type StackParamList = {
  List: undefined;
  Introduction: undefined;
  PanGestureBasics: undefined;
  AnimatedScrollView: undefined;
  InterporlateColors: undefined;
  PinchGestureHandlerBasics: undefined;
  DoubleTapGestureHandler: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="PanGestureBasics" component={PanGestureBasics} />
        <Stack.Screen name="AnimatedScrollView" component={AnimatedScrollView} />
        <Stack.Screen name="InterporlateColors" component={InterporlateColors} />
        <Stack.Screen name="PinchGestureHandlerBasics" component={PinchGestureHandlerBasics} />
        <Stack.Screen name="DoubleTapGestureHandler" component={DoubleTapGestureHandler} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
