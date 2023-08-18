import { Dimensions, StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

type PageProps = {
  index: number;
  translateX: Animated.SharedValue<number>;
  title: string;
};

const { width: PAGE_WIDTH } = Dimensions.get('window');

export { PAGE_WIDTH };

export const Page = ({ index, title, translateX }: PageProps) => {
  const pageOffset = PAGE_WIDTH * index;
  const backgroundColor = `rgba(0,0,256,0.${index + 2})`;

  const rStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: translateX.value + pageOffset }] };
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }, rStyle]}>
      <Text style={styles.text}>{title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 70,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});
