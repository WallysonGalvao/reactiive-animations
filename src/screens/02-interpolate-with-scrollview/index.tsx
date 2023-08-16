import { StyleSheet } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

import { Page } from './Page';

const WORDS = ["What's", 'up', 'mobile', 'devs?'];

export const AnimatedScrollView = () => {
  const translateX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      onScroll={onScroll}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {WORDS.map((title, index) => (
        <Page key={index.toString()} title={title} index={index} translateX={translateX} />
      ))}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
