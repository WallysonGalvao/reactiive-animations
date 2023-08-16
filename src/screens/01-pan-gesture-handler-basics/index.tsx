import { StyleSheet, View } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type ContextType = {
  translateX: number;
  translateY: number;
};

type CalculateDistanceType = {
  translateX: SharedValue<number>;
  translateY: SharedValue<number>;
};

const SIZE = 90;
const CIRCLE_SIZE = SIZE * 2;

const calculateDistance = ({ translateX, translateY }: CalculateDistanceType) => {
  'worklet';

  return Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
};

export const PanGestureBasics = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
    onStart: (_, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance = calculateDistance({ translateX, translateY });

      if (distance < CIRCLE_SIZE + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    const distance = calculateDistance({ translateX, translateY });
    const color = withSpring(interpolateColor(distance, [0, CIRCLE_SIZE], ['#0000ff', '#F85982']));

    return {
      backgroundColor: color,
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
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
  square: {
    width: SIZE,
    height: SIZE,
    borderRadius: 20,
  },
  circle: {
    width: CIRCLE_SIZE * 2,
    height: CIRCLE_SIZE * 2,
    borderRadius: CIRCLE_SIZE,
    borderWidth: 5,
    borderColor: '#F85982',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
