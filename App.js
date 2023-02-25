import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header/Header";

export default function App() {
  const headerData = {
    heading: "Login",
    text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy",
  };
  return (
    <View style={styles.container}>
      <Header heading={headerData.heading} text={headerData.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
