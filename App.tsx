import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Introduction } from "./components/00-introduction-to-reanimated-2";
import { PanGestureBasics } from "./components/01-pan-gesture-handler-basics";
import { AnimatedScrollView } from "./components/02-interpolate-with-scrollview";
import { InterporlateColors } from "./components/03-interpolate-color";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InterporlateColors />
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
