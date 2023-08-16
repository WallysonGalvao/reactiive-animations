import { useNavigation } from '@react-navigation/native';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StackParamList } from '../../routes';

type Item = { screen: keyof StackParamList; title: string };

const items: Item[] = [
  { screen: 'Introduction', title: 'introduction-to-reanimated-2' },
  { screen: 'PanGestureBasics', title: 'pan-gesture-handler-basics' },
  { screen: 'AnimatedScrollView', title: 'interpolate-with-scrollview' },
  { screen: 'InterporlateColors', title: 'interpolate-color' },
  { screen: 'PinchGestureHandlerBasics', title: 'pinch-gesture-handler-basics' },
];

export const List = () => {
  const { navigate } = useNavigation();

  const onPress = (screen: keyof StackParamList) => navigate(screen);

  const keyExtractor = (item: Item) => item.screen;

  const renderItem = ({ item }: { item: Item }) => {
    return (
      <Pressable style={styles.content} onPress={() => onPress(item.screen)}>
        <Text style={styles.text}>{item.title}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 16,
  },
  content: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
