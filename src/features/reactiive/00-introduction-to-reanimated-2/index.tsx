import { useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const SIZE = 100;

/**
 * `rotate` is a function that takes a `SharedValue` and returns a string
 * @param progress - SharedValue<number>
 * @returns A string that represents a CSS transform value.
 */
const rotate = (progress: SharedValue<number>) => {
  'worklet';

  return `${progress.value * 2 * Math.PI}rad`;
};

export const Introduction = () => {
  /* Creating a shared value that can be used in multiple places. */
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  /* Creating an animated style that is used to animate the view. */
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    borderRadius: (progress.value * SIZE) / 2,
    transform: [{ scale: scale.value }, { rotate: rotate(progress) }],
  }));

  const handleAnimation = () => {
    progress.value = withRepeat(withSpring(progress.value === 1 ? 0.5 : 1), 3, true);
    scale.value = withRepeat(withSpring(scale.value === 2 ? 1 : 2), 3, true);
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.view, animatedStyle]} />
      <TouchableOpacity onPress={handleAnimation} style={styles.button}>
        <Text style={styles.text}>animate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'blue',
  },
  button: {
    padding: 10,
    position: 'absolute',
    bottom: 250,
  },
  text: {
    fontSize: 18,
  },
});
