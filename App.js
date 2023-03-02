import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import tree from "./assets/images/tree.png";
import MyStack from "./navigation/MyStack";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyStack />
    </SafeAreaView>
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
