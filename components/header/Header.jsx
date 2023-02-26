import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/logo.png";

const Header = (props) => {
  console.log(props);
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.heading}>{props.heading}</Text>
      <Text style={styles.text}>{props.text}</Text>
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
    fontWeight: "bold",
    marginVertical: 10,
  },
  logo: {
    height: 100,
    width: 100,
  },
  text: {
    textAlign: "center",
    paddingHorizontal: 30,
    fontSize: 12,
  },
});

export default Header;
