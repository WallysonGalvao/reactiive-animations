import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Introduction } from "./components/00-introduction-to-reanimated-2";
import { PanGestureBasics } from "./components/01-pan-gesture-handler-basics";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PanGestureBasics />
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
