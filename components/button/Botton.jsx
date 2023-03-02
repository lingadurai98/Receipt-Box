import { Pressable, StyleSheet, Text, View } from "react-native";
import { button__Color } from "../../constants/Constant";

const Button = (props) => {
  return (
    <View style={[props.style, styles.buttonOuterContainer]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={props.onPress}
        android_ripple={{ color: "#0b6a04" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: button__Color,
    paddingVertical: 8,
    elevation: 2,
    borderColor: "#ffffff24",
    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default Button;
