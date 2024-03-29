import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { PinchGestureHandler, PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

// Credit to Mariana Ibanez https://unsplash.com/photos/NJ8Z8Y_xUKc
const imageUri =
  'https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';

const { width, height } = Dimensions.get('screen');

export const PinchGestureHandlerBasics = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
    onActive: (event) => {
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    },
    onEnd: () => {
      scale.value = withTiming(1);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: focalX.value },
        { translateY: focalY.value },
        { translateX: -width / 2 },
        { translateY: -height / 2 },
        { scale: scale.value },
        { translateX: -focalX.value },
        { translateY: -focalY.value },
        { translateX: width / 2 },
        { translateY: height / 2 },
      ],
    };
  });

  const focalPointStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: focalX.value }, { translateY: focalY.value }],
    };
  });

  return (
    <PinchGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={styles.image}>
        <Animated.Image style={[styles.image, rStyle]} source={{ uri: imageUri }} />
        <Animated.View style={[styles.focalPoint, focalPointStyle]} />
      </Animated.View>
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  image: {
    width,
    height,
  },
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
});
