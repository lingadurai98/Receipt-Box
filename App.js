import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CreateEmailAddress from "./screens/createEmailAddress/CreateEmailAddress";

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#d2f5eb", "#026838"]}>
      <CreateEmailAddress />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
