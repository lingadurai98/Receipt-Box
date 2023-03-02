import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Button from "../../components/button/Botton";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Checkbox from "expo-checkbox";
import { Entypo } from "@expo/vector-icons";

const Signup = ({ navigation }) => {
  const termsAndConditions =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy";
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [secureTextEntryTwo, setsecureTextEntryTwo] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [emailerror, setemailerror] = useState("");
  const [pwerror, setpwerror] = useState("");
  const [cnfpwerror, setcnfpwerror] = useState("");
  const [mailvalidate, setmailvalidate] = useState(false);
  const [passwordvalidate, setpasswordvalidate] = useState(false);
  const [confirmpasswordvalidate, setconfirmpasswordvalidate] = useState(false);

  const termsHandler = () => {
    Alert.alert("Terms & Conditions", termsAndConditions, [
      {
        text: "Close",
        onPress: () => console.log("closed"),
      },
    ]);
  };

  const handleLogin = () => {
    setemailerror("");
    setpwerror("");
    setcnfpwerror("");
    navigation.navigate("login");
  };

  const emailRegex =
    /^[a-zA-Z0-9\W]+[@]{1}[a-z]+[\.]\bcom$|^[a-zA-Z0-9\W]+[@]{1}[a-z]+[\.]\bus$|^[a-zA-Z0-9\W]+[@]{1}[a-z]+[\.]\bca$/;

  // useEffect(() => {
  //   if (
  //     mailvalidate === true &&
  //     passwordvalidate === true &&
  //     confirmpasswordvalidate === true
  //   ) {
  //     navigation.navigate("otpPage");
  //   } else {
  //     return;
  //   }
  // }, [pwerror, cnfpwerror, emailerror]);

  const handleSignup = () => {
    console.log(isError);
    if (!isError) {
      navigation.navigate("otpPage");
    }
    var testemail = emailRegex.test(email);

    if (testemail == false || email == "") {
      setIsError(true);

      setemailerror("Invalid Email");
      setmailvalidate(false);
    } else {
      setIsError(false);
      setemailerror("");
      setmailvalidate(true);
    }

    //password
    const passwordRegex =
      /(?=[a-z]+[\W]+[0-9]+)|([\W]+[a-z]+[0-9]+)|([\W]+[0-9]+[a-z]+)|([a-z]+[0-9]+[\W]+)|([0-9]+[\W]+[a-z]+)|([0-9]+[a-z]+[\W]+)/gi;
    var testpassword = passwordRegex.test(password);

    if (password == "" || password.length < 8) {
      setIsError(true);
      setpwerror("Sorry, the password must atleast be 8 characters");
      setpasswordvalidate(false);
    } else if (testpassword == false) {
      setIsError(true);
      setpwerror(
        "Sorry, the password must contain atleast one alphabet, one digit and a special character."
      );
      setpasswordvalidate(false);
    } else {
      setIsError(false);
      setpwerror("");
      setpasswordvalidate(true);
    }

    //cnfrmpw
    var testconfirmpassword = passwordRegex.test(confirmpassword);

    // if (confirmpassword == "" || confirmpassword.length < 8) {
    //   setIsError(true);
    //   setcnfpwerror("Sorry, the password must atleast be 8 characters");
    //   setconfirmpasswordvalidate(false)
    // } else if (testconfirmpassword == false) {
    //   setIsError(true);
    //   setcnfpwerror(
    //     "Sorry, the password must contain atleast one alphabet, one digit and a special character."
    //   );
    //   setconfirmpasswordvalidate(false)
    // }
    if (confirmpassword != password) {
      setIsError(true);
      setcnfpwerror("Passwords do not match");
      setconfirmpasswordvalidate(false);
    } else {
      setIsError(false);
      setcnfpwerror("");
      setconfirmpasswordvalidate(true);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismiss");
      }}
    >
      <View style={styles.SignupContainer}>
        <Header
          heading="Signup"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur"
        />

        <View style={styles.inputContainerOne}>
          <Input
            placeholder="Enter Your Email Address"
            style={styles.input}
            onChangeText={(text) => {
              // emailtest = emailRegex.test(text)
              //   {emailtest ? setmailTestState(emailtest) : setmailTestState(emailtest)}
              setemail(text);
              // console.log(mailTestState)
            }}
            isError={isError}
            // errMsg={errMsg.email}
            errMsg={emailerror}
          />
        </View>

        <View style={styles.inputContainerTwo}>
          <View style={styles.eyeIcon}>
            <TouchableOpacity
              onPress={() => setsecureTextEntry((prevvalue) => !prevvalue)}
            >
              <Entypo
                name={secureTextEntry ? "eye" : "eye-with-line"}
                size={20}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <Input
            placeholder="Enter Your Password"
            secureTextEntry={secureTextEntry}
            onChangeText={(text) => {
              setpassword(text);
            }}
            style={styles.input}
            isError={isError}
            // errMsg={errMsg.password}
            errMsg={pwerror}
          />
        </View>
        <View style={styles.inputContainerThree}>
          <View style={styles.eyeIconone}>
            <TouchableOpacity
              onPress={() => setsecureTextEntryTwo((prevvalue) => !prevvalue)}
            >
              <Entypo
                name={secureTextEntryTwo ? "eye" : "eye-with-line"}
                size={20}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <Input
            placeholder="Confirm Password"
            secureTextEntry={secureTextEntryTwo}
            onChangeText={(text) => setconfirmpassword(text)}
            style={styles.input}
            isError={isError}
            // errMsg={errMsg.confirmpassword}
            errMsg={cnfpwerror}
          />
        </View>

        <View style={styles.termsContainer}>
          <Checkbox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={styles.checkbox}
            color={toggleCheckBox ? "#5f0230" : "#000000"}
          />
          <Text style={styles.label}>
            Check our{" "}
            <Text style={styles.termsText} onPress={termsHandler}>
              Terms & Conditions
            </Text>{" "}
            out
          </Text>
        </View>
        <View>
          <Button
            children="Sign Up"
            disabled={toggleCheckBox}
            style={styles.button}
            onPress={handleSignup}
          />
        </View>
        <View style={styles.loginBtnContainer}>
          <Text>Do you already have an account?</Text>
          <Button
            children="Proceed To Login"
            style={styles.button}
            onPress={handleLogin}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  SignupContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  inputContainerOne: {
    padding: 15,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    marginTop: 15,
  },
  input: {
    borderColor: "transparent",
    paddingHorizontal: 30,
    paddingVertical: 3,
    fontSize: 14,
    // color: "#000100",
    // justifyContent: "center",
    // alignItems: "center",
    width: 300,
    height: 40,
    position: "relative",
  },
  inputContainerTwo: {
    marginTop: 8,
    padding: 15,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    flexDirection: "row-reverse",
  },
  eyeIcon: {
    position: "absolute",
    right: "90%",
    zIndex: 1,
    top: 15,
  },
  eyeIconone: {
    position: "absolute",
    right: "90%",
    zIndex: 1,
    top: 15,
  },
  inputContainerThree: {
    marginTop: 8,
    // marginBottom: 20,
    padding: 15,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    flexDirection: "row-reverse",
  },
  termsContainer: {
    padding: 10,
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
    color: "black",
  },
  label: {
    margin: 8,
  },
  termsText: {
    color: "blue",
  },
  loginBtnContainer: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 300,
  },
});

export default Signup;
