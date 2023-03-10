import { View, Text, StyleSheet, Pressable } from "react-native";
import Header from "../../components/header/Header";
import {
  background__Color,
  button__Color,
  font__Color,
  otpVerificationText,
} from "../../constants/Constant";
import { useEffect, useState } from "react";
import Button from "../../components/button/Botton";
import OTPInputView from '@bherila/react-native-otp-input'
import OtpInputs from "react-native-otp-inputs";

function OTP_Verification({ navigation }) {
  const [optText, setOtpText] = useState("");
  const [resend, setResend] = useState(true);
  const [timer, setTimer] = useState(0);
  // const [id, setId] = useState(null);

  const submitHandler = () => {
    navigation.navigate("login");
  };

  const otpHandler = (otp) => {
    setOtpText(otp);
  };

  const resendHandler = () => {
    setResend(false);
    setTimer(6);
  };

  useEffect(() => {
    let interval = null;
    if (resend === false) {
      if (timer === 0) {
        console.log(resend);
        setResend(true);
      } else {
        interval = setInterval(() => {
          setTimer((timer) => timer - 1);
        }, 1000);
      }
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <View style={styles.rootContainer}>
      <Header
        heading={otpVerificationText.heading}
        text={otpVerificationText.text}
        textStyle="#074e02"
      />
      <View style={styles.otpContainer}>
        {/* <OtpInputs 
        numberOfInputs={6}
        /> */}
        {/* <OtpInputs
          handleChange={otpHandler}
          autofillFromClipboard={false}
          numberOfInputs={6}
          keyboardType="default"
          inputStyles={{
            borderColor: font__Color,
            borderBottomWidth: 1,
            padding: 5,
            fontSize: 20,
            textAlign: "center",
            height: 35,
            color: font__Color,
          }}
          inputContainerStyles={{
            marginVertical: 20,
            marginHorizontal: 10,
            width: 30,
          }}
          secureTextEntry={false}
        />  */}
        <OTPInputView
          pinCount={6}
          code={optText}
          style={{ width: '80%', height: 200 }}
          codeInputFieldStyle={{ borderColor: font__Color,
             width: 30,
            height: 45,
            // borderWidth: 0,
            borderBottomWidth: 1,  
            color: font__Color,}}
          codeInputHighlightStyle={{ borderColor: 'black',  color: font__Color,}}
          onCodeChanged={otpHandler}
          keyboardType="default"
          onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}
          editable
          autoFocusOnLoad
          secureTextEntry={false}
        />
    <Text>{optText}</Text>
      </View>
      <Button onPress={submitHandler}>Submit</Button>
      <View style={styles.resend__container}>
        <Text style={styles.resend__text}>Did not receive OTP? </Text>
        {resend ? (
          <Pressable style={styles.resend__button} onPress={resendHandler}>
            <Text style={styles.resend__button__text}>Resend OTP</Text>
          </Pressable>
        ) : (
          <Text style={styles.timer__text}>{timer}</Text>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: background__Color,
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  otpContainer: {
    justifyContent: "center",
    alignItems: "center",
    //  marginVertical: 50,
  },
  resend__container: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
  resend__button: {
    marginLeft: 5,
  },
  resend__button__text: {
    fontSize: 18,
    fontWeight: "600",
    color: button__Color,
  },
  timer__text: {
    color: button__Color,
  },
  resend__text: {
    color: font__Color,
  },
});
export default OTP_Verification;
