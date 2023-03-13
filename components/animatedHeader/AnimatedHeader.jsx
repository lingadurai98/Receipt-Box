import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../assets/images/rbLogo.png";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
} from "react-native";

const AnimatedHeader = () => {
  return (
    <LinearGradient
      colors={["#346800ff", "#ffffff00"]}
      locations={[1, 1]}
      end={[0.7, 2]}
      style={styles.greadient__background}
    >
      <View style={styles.circle}></View>
      <Text style={styles.lg__text}>Transaction</Text>
      <SafeAreaView style={styles.safe__container}>
        <View style={styles.profile__contianer}>
          <Image style={styles.logo} source={Logo} />
          <Text style={styles.profile__text}>Lingadurai</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  greadient__background: {
    position: "relative",
    height: 200,
    // opacity: 0.2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  circle: {
    position: "absolute",
    width: 200,
    backgroundColor: "#ffffff05",
    top: -50,
    right: -50,
    height: 200,
    borderRadius: 100,
  },
  lg__text: {
    position: "absolute",
    fontSize: 65,
    fontWeight: "900",
    width: "150%",
    top: 120,
    left: "40%",
    color: "#ffffff05",
  },
  safe__container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  profile__contianer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  profile__text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#c0c0c0",
  },
  logo: {
    height: 50,
    width: 50,

    // backgroundColor: "blue",
    borderRadius: 50,
  },
});

export default AnimatedHeader;
