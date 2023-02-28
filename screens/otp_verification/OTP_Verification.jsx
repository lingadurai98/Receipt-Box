import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Header from "../../components/header/Header";
import { otpVerificationText } from "../../constants/Constant";
import OtpInputs from "react-native-otp-inputs";
import { useState } from "react";

function OTP_Verification() {
  const [optText, setOtpText] = useState("");

  const otpHandler = (otp) => {
    setOtpText(otp);
  };
  return (
    <View style={styles.rootContainer}>
      <Header
        heading={otpVerificationText.heading}
        text={otpVerificationText.text}
      />
      <View style={styles.otpContainer}>
        <OtpInputs
          handleChange={(code) => setOtpText(code)}
          numberOfInputs={6}
          inputStyles={{
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
            fontSize: 20,
            textAlign: "center",
            height: 30,
          }}
          inputContainerStyles={{
            marginVertical: 20,
            marginHorizontal: 10,
            width: 20,
          }}
          secureTextEntry={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 100,
  },
  otpContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});
export default OTP_Verification;
