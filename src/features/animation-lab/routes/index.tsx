import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { List } from '..';
import { PixelatedImage } from '../pixelated-image';
import { TypographyMetaball } from '../typography-metaball';

export type StackParamList = {
  List: undefined;
  PixelatedImage: undefined;
  TypographyMetaball: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const Route = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Group>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="PixelatedImage" component={PixelatedImage} />
        <Stack.Screen name="TypographyMetaball" component={TypographyMetaball} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
