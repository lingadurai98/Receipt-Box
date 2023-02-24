import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  console.log(props);
  return (
    <View style={styles.headerContainer}>
      <Text>Logo</Text>
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
    marginVertical: 20,
  },
  text: {
    textAlign: "center",
    paddingHorizontal: 30,
    fontSize: 12,
  },
});

export default Header;
