import { Image, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Home from "./screens/home/Home";
import LoginScreen from "./screens/login/Login";
import tree from "./assets/images/tree.png";

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#d2f5eb", "#3d956c"]}>
      <Image source={tree} style={styles.image}></Image>
      <LoginScreen />
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
  image: {
    position: "absolute",
    opacity: 0.05,
    left: -50,
  },
});
