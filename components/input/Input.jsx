import { StyleSheet, Text, TextInput, View } from "react-native";
import { input__Text__Color } from "../../constants/Constant";

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
          style={[styles.input]}
          placeholderTextColor={(placeholderColor = "#07600053")}
          {...restProps}
        />
      </View>
      <View style={styles.err_container}>
        {isError && <Text numberOfLines={4} lineBreakMode={"clip"}  style={styles.err__Text}>{errMsg}</Text>}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input__contianer: {
    borderBottomWidth: 1,
    backgroundColor: "#8ec8bc",
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
   flexWrap:'wrap'
  },
  err_container:{
    width : 300,
     height: 50,
  }
 
});
