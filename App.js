import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import MyStack from "./navigation/MyStack";
import Alltransactions from "./screens/allTransactions/Alltransactions";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <MyStack /> */}
      <Alltransactions />
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
