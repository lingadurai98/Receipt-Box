import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import Signup from "./screens/signup/Signup";
import Login from './screens/login/Login';
import CreateEmailAddress from "./screens/createEmailAddress/CreateEmailAddress";
import Home from "./screens/home/Home";
import OTP_Verification from "./screens/otp_verification/OTP_Verification";
import Dashboard from "./screens/dashboard/Dashboard";

export default function App() {
  return (

    <View>
      <Dashboard />
    </View>
   
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen
      //       name="signup"
      //       component={Signup}
      //       options={{ headerShown: false }}
      //     />
      //     <Stack.Screen
      //       name="login"
      //       component={Login}
      //       options={{ headerShown: false }}
      //     />
      //     <Stack.Screen
      //       name="otpPage"
      //       component={OTP_Verification}
      //       options={{ headerShown: false }}
      //     />

      //     <Stack.Screen
      //       name="createEmail"
      //       component={CreateEmailAddress}
      //       options={{ headerShown: false }}
      //     />
      //     <Stack.Screen
      //       name="home"
      //       component={Home}
      //       options={{ headerShown: false }}
      //     />
      //      <Stack.Screen
      //       name="dashboard"
      //       component={Dashboard}
      //       options={{ headerShown: false }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
   
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  // image: {
  //   position: "absolute",
  //   opacity: 0.5,
  // },
});
