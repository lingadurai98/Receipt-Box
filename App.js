import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "./components/button/Botton";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const headerData = {
    heading: "Login",
    text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy",
  };
  const blurHandler = () => {
    Alert.alert("summa", "summa panna", [{ text: "ok" }]);
  };
  return (
    <LinearGradient style={styles.container} colors={["#d2f5eb", "#026838"]}>
      <Header heading={headerData.heading} text={headerData.text} />
      <Input
        placeholder="enter your name"
        errMsg="Please Enter the Valid user Name"
        secureTextEntry={true}
        type={true}
        // onBlur={blurHandler}
      />
      <Input
        placeholder="enter your name"
        errMsg="Please Enter the Valid user Name"
        secureTextEntry={true}
        type={true}
        isError={true}
        // onBlur={blurHandler}
      />
      <Input
        placeholder="enter your name"
        errMsg="Please Enter the Valid user Name"
        secureTextEntry={true}
        type={true}
        // onBlur={blurHandler}
      />
      <Button>Submit</Button>
    </LinearGradient>
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
