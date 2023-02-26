import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#d2f5eb", "#026838"]}
    ></LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    // alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
    paddingHorizontal: 20,
  },
});
