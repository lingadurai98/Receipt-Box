import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import OTP_Verification from "./screens/otp_verification/OTP_Verification";

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#d2f5eb", "#026838"]}>
      <OTP_Verification />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
