import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Input from "../../components/input/Input";
import Button from "../../components/button/Botton";
import logo from "../../assets/images/logo.png";
import Header from "../../components/header/Header";
import { background__Color, font__Color } from "../../constants/Constant";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // handle login

  const handleLogin = () => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|us)$/;

    if (email.trim() === "") {
      setEmailError("Please enter your email address");
    } else if (!regex.test(email)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    var passwordtest = passwordRegex.test(password);

    if (password.trim() === "") {
      setPasswordError("Please enter your password");
    } else if (!passwordtest) {
      setPasswordError(
        "Please enter a valid password (minimum 8 characters, at least one letter, one number and one special character)"
      );
    } else {
      setPasswordError("");
    }

    if (regex.test(email) && passwordtest) {
      navigation.navigate("createEmail");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Header
          heading="Login"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur"
        />
      </View>
      <Input
        style={[styles.input]}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        isError={emailError === "" ? false : true}
        errMsg={emailError}
      />

      <SafeAreaView style={[styles.passwordContainer]}>
        <SafeAreaView  style={styles.eyeIconContainer}>
          <TouchableOpacity
           
            onPress={() => setShowPassword(!showPassword)}
          >
            <Entypo
              name={showPassword ? "eye" : "eye-with-line"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </SafeAreaView>

        <Input
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
          value={password}
          isError={passwordError}
          errMsg={passwordError}
        />
      </SafeAreaView>

      <Button onPress={handleLogin} style={styles.button}>
        Submit
      </Button>
      <SafeAreaView style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView >
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <Button onPress={() => navigation.navigate("signup")}>
          Proceed to Signup{" "}
        </Button>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: background__Color,
    paddingHorizontal: 20,
  },
  forgotPasswordContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  forgotPasswordText: {
    textDecorationLine: "underline",
    color: font__Color,
  },
  signupText: { color: font__Color },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 16,
    color: "#0D0D0D",
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    width: 300,
    marginBottom: 20,
    justifyContent: 'center'
  },
  passwordInput: {
    height: 50,
    width: 300,
    borderRadius: 10,
    marginBottom: 20,
    // paddingHorizontal: 20,
    fontSize: 18,
    color: "#0D0D0D",
    backgroundColor: "#FFFFFF",
    justifyContent: 'center'
    // position: "relative",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  passwordContainer: {
    // width: 300,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    // borderColor: "#0D0D0D", // dark green
    // borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 18,
    color: "#0D0D0D", // dark green
    // backgroundColor: "#FFFFFF", // white
  },
  eyeIconContainer: {
    padding: 10,
    position: "absolute",
    right: "80%",
    zIndex: 1,
     top: 15,
    bottom: -15,
  },
  errorBorder: {
    borderColor: "#FF0000",
  },
  errorMessage: {
    color: "#FF0000",
    marginBottom: 20,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  button: {
    // backgroundColor: "#0D0D0D",
    width: 300,
    // height: 50,
    // borderRadius: 10,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default LoginScreen;
