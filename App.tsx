import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Introduction } from "./components/00-introduction-to-reanimated-2";
import { PanGestureBasics } from "./components/01-pan-gesture-handler-basics";
import { AnimatedScrollView } from "./components/02-interpolate-with-scrollview";
import { InterporlateColors } from "./components/03-interpolate-color";
import { PinchGestureHandlerBasics } from "./components/04-pinch-gesture-handler-basics";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PinchGestureHandlerBasics />
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
