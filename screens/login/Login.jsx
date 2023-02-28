import { View } from "react-native";
import React, { useState } from "react";
import Button from "../../components/button/Botton";
import {
  SafeAreaView,
  Text,
  TextInput,
  
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/header/Header";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|us)$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

    if (email.trim() === "") {
      setEmailError("Please enter your email address");
      return;
    }

    if (!regex.test(email)) {
      setEmailError("Please enter a valid email ");
      return;
    }
    if (!registeredEmails.includes(email)) {
      setEmailError("Email not registered");
      return;
    }
    setEmailError("");

    if (password.trim() === "") {
      setPasswordError("Please enter your password");
      return;
    }
 
    if (!passwordRegex.test(password)) {
      setPasswordError("Please enter a valid password (minimum 8 characters, at least one letter, one number and one special character)");
      return;
    }
    setPasswordError("");

   
  };

  return (
    <SafeAreaView style={styles.container}>
     <Header 
      heading="Log-In"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor nunc sit amet dolor venenatis, at sagittis mi porttitor. Vestibulum sit amet nulla a enim."/>
      
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
      <Button heading="Log-In" children="Log in" onPress={handleLogin}/>
      {/* <Button title="Log in" onPress={handleLogin} /> */}
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
    marginTop:50,
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
