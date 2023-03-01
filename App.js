import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Home from "./screens/home/Home";

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#d2f5eb", "#026838"]}>
      <Home />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    paddingTop: 24,
  },
});
