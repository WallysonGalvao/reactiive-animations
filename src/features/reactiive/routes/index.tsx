import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { List } from '..';
import { Introduction } from '../00-introduction-to-reanimated-2';
import { PanGestureBasics } from '../01-pan-gesture-handler-basics';
import { AnimatedScrollView } from '../02-interpolate-with-scrollview';
import { InterporlateColors } from '../03-interpolate-color';
import { PinchGestureHandlerBasics } from '../04-pinch-gesture-handler-basics';
import { DoubleTapGestureHandler } from '../05-double-tap-gesture-handler';
import { ScrollBehaviorWithPanGesture } from '../06-scroll-behavior-with-pan-gesture';
import { ColorPicker } from '../07-color-picker';
import { SmoothDropdown } from '../16-smooth-dropdown';

export type StackParamList = {
  List: undefined;
  Introduction: undefined;
  PanGestureBasics: undefined;
  AnimatedScrollView: undefined;
  InterporlateColors: undefined;
  PinchGestureHandlerBasics: undefined;
  DoubleTapGestureHandler: undefined;
  ScrollBehaviorWithPanGesture: undefined;
  ColorPicker: undefined;
  SmoothDropdown: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const Route = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Group>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="PanGestureBasics" component={PanGestureBasics} />
        <Stack.Screen name="AnimatedScrollView" component={AnimatedScrollView} />
        <Stack.Screen name="InterporlateColors" component={InterporlateColors} />
        <Stack.Screen name="PinchGestureHandlerBasics" component={PinchGestureHandlerBasics} />
        <Stack.Screen name="DoubleTapGestureHandler" component={DoubleTapGestureHandler} />
        <Stack.Screen
          name="ScrollBehaviorWithPanGesture"
          component={ScrollBehaviorWithPanGesture}
        />
        <Stack.Screen name="ColorPicker" component={ColorPicker} />
        <Stack.Screen name="SmoothDropdown" component={SmoothDropdown} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
