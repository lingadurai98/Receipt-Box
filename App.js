import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import MyStack from "./navigation/MyStack";
import DisclaimerScreen from "./screens/DisclaimerScreen/DisclaimerScreen";
import WelcomeScreen from "./screens/HomePage/HomePage";
import HomePage from "./screens/HomePage/HomePage";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        {/* <MyStack /> */}

        <WelcomeScreen />
        {/* <DisclaimerScreen/> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: "absolute",
    opacity: 0.5,
  },
});
