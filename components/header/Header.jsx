import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/rbLogo.png";

import { font__Color, heading__Color } from "../../constants/Constant";
const Header = (props) => {
  return (
    <View style={[styles.headerContainer]}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.heading}>{props.heading}</Text>
      <Text style={[styles.text]}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  heading: {
    fontSize: 30,
    fontWeight: "900",
    marginVertical: 10,
    color: heading__Color,
  },
  logo: {
    height: 100,
    width: 100,
  },
  text: {
    textAlign: "center",
    paddingHorizontal: 30,
    fontSize: 12,
    color: font__Color,
  },
});

export default Header;
