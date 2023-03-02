import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateEmailAddress from "../screens/createEmailAddress/CreateEmailAddress";
import Home from "../screens/home/Home";
import LoginScreen from "../screens/login/Login";
import OTP_Verification from "../screens/otp_verification/OTP_Verification";
import Signup from "../screens/signup/Signup";

const MyStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="otpPage"
          component={OTP_Verification}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="createEmail"
          component={CreateEmailAddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
