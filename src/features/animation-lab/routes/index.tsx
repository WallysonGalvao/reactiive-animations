import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { List } from '..';
import { PixelatedImage } from '../pixelated-image';

export type StackParamList = {
  List: undefined;
  PixelatedImage: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const Route = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Group>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="PixelatedImage" component={PixelatedImage} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
