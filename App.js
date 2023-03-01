import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CreateAddress from "./screens/createAddress/CreateAddress";
import Signup from "./screens/signup/Signup";
import Home from "./screens/home/Home";
import LoginScreen from "./screens/login/Login";

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#d2f5eb", "#026838"]}>

      {/* <CreateAddress /> */}
       {/* <Signup /> */}
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
