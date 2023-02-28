import { View } from "react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|us)$/;

    if (email.trim() === "") {
      setEmailError("Please enter your email address");
      return;
    }

    if (!regex.test(email)) {
      setEmailError("Please enter a valid email ");
      return;
    }

    setEmailError("");

    if (password.trim() === "") {
      setPasswordError("Please enter your password");
      return;
    }

    setPasswordError("");

   
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            width: 150,
            height: 150,

            uri: "https://via.placeholder.com/150",
          }}
        />
        <Text style={styles.logoText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </SafeAreaView>
      <TextInput
        style={[styles.input, emailError && styles.errorBorder]}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      {emailError ? (
        <Text style={styles.errorMessage}>{emailError}</Text>
      ) : null}
      <SafeAreaView style={styles.passwordContainer}>
        <TextInput
          style={[styles.passwordInput, passwordError && styles.errorBorder]}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </SafeAreaView>
      {passwordError ? (
        <Text style={styles.errorMessage}>{passwordError}</Text>
      ) : null}
      <Button title="Log in" onPress={handleLogin} />
      <SafeAreaView style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.signupTextCont}>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.signupButton}>Proceed to Signup</Text>
        </TouchableOpacity>
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
    backgroundColor: "#E8F8F5",
    paddingHorizontal: 20,
    marginBottom: 40,
    marginTop: 50,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  forgotPasswordContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  forgotPasswordText: {
    textDecorationLine: "underline",
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    width: 150,
    height: 150,
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
    borderColor: "#0D0D0D", 
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#0D0D0D", 
    backgroundColor: "#FFFFFF", 
  },
  passwordContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#0D0D0D", // dark green
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#0D0D0D", // dark green
    backgroundColor: "#FFFFFF", // white
  },
  eyeIconContainer: {
    padding: 10,
  },
  errorBorder: {
    borderColor: "#FF0000",
  },
  errorMessage: {
    color: "#FF0000",
    marginBottom: 60,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0D0D0D",
    width: 300,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default LoginScreen;
