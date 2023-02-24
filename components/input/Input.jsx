import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

const Input = (props) => {
 
  return (
    <View>
     
      <TextInput placeholder={props.placeholder}
       onChangeText={(value)=> props.changeHandler(value)} 
       secureTextEntry={props.secureTextEntry} 
        
       />
    </View>
  );
};

export default Input;
