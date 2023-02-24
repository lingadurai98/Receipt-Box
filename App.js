import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header/Header";
import Signup from "./screens/signup/Signup";

export default function App() {
  const headerData = {
    heading: "Sign Up",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy",
  };
  return (
    <View style={styles.container}>
      <Header heading={headerData.heading} text={headerData.text} />
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 40,
    marginTop: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
