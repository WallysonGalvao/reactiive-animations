import { useCallback, useRef } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

import heart from './assets/heart.png';
import image from './assets/image.jpeg';

const { width: WIDTH_SIZE, height: HEIGHT_SIZE } = Dimensions.get('window');

const AnimatedImage = Animated.createAnimatedComponent(Image);

export const DoubleTapGestureHandler = () => {
  const scale = useSharedValue(0);

  const doubleTapRef = useRef();

  const rStyle = useAnimatedStyle(() => ({ transform: [{ scale: Math.max(scale.value, 0) }] }));

  const onSingleTap = useCallback(() => {
    console.log('single');
  }, []);

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
        <TapGestureHandler
          ref={doubleTapRef}
          numberOfTaps={2}
          maxDelayMs={250}
          onActivated={onDoubleTap}>
          <Animated.View>
            <ImageBackground source={image} style={styles.image}>
              <AnimatedImage source={heart} resizeMode="center" style={[styles.heart, rStyle]} />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: WIDTH_SIZE,
    height: HEIGHT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heart: {
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.35,
    shadowRadius: 35,
  },
});
