import { StyleSheet, Text, TextInput, View } from "react-native";
import { font__Color, input__Text__Color } from "../../constants/Constant";

const Input = ({
  style,
  isError,
  errMsg,
  placeholderColor,
  textClr,
  ...restProps
}) => {
  return (
    <View>
      <View
        style={[
          style,
          styles.input__contianer,
          { borderBottomColor: isError ? "red" : "transparent" },
        ]}
      >
        <TextInput
          style={[styles.input, { color: textClr }]}
          placeholderTextColor={
            placeholderColor ? placeholderColor : "#a9dda561"
          }
          {...restProps}
        />
      </View>
      {isError && <Text style={styles.err__Text}>{errMsg}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input__contianer: {
    borderBottomWidth: 1,
    backgroundColor: "#ffffff1c",
    borderRadius: 10,
  },
  input: {
    borderColor: "transparent",
    paddingHorizontal: 20,
    paddingVertical: 3,
    fontSize: 14,
    color: input__Text__Color,
  },
  err__Text: {
    fontSize: 12,
    color: "red",
    marginTop: 5,
  },
});
