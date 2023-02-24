import { Pressable, StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View>
      <Text>Logo</Text>
      <Text>{props.heading}</Text>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
