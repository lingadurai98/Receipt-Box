import { useState } from "react";
import { View, StyleSheet, Text, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import Button from "../../components/button/Botton";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Checkbox from "expo-checkbox";

const Signup = () => {
  const termsAndConditions = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy";
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [secureTextEntry, setsecureTextEntry] = useState(true)
  const [secureTextEntryTwo, setsecureTextEntryTwo] = useState(true)

  const [name, setname] = useState('')

  const termsHandler = () => {
    Alert.alert('Terms & Conditions', termsAndConditions, [{
      text: 'Close', onPress: () => console.log('closed')
    }])
  }
  const changeHandler = (val) => {
    setname(val)
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismiss');
    }}>
      <View style={styles.SignupContainer}>
        <View style={styles.inputContainerOne}>
          <Input placeholder='Enter Your Email Address' />
        </View>


        <View style={styles.inputContainerTwo}>
          <View style={styles.eyeIcon}>
            <TouchableOpacity onPress={() => setsecureTextEntry((prevvalue) =>  !prevvalue)}>
            <Text>{secureTextEntry ? 'show' : 'hide' }</Text>
            </TouchableOpacity>
            
        </View>

        <Input
          placeholder='Enter Your Password'
          secureTextEntry={secureTextEntry}
          changeHandler={changeHandler}

        />
      </View>
      <View style={styles.inputContainerThree}>
        <View style={styles.eyeIconone}>
        <TouchableOpacity onPress={() => setsecureTextEntryTwo((prevvalue) =>  !prevvalue)}>
            <Text>{secureTextEntryTwo ? 'show' : 'hide' }</Text>
            </TouchableOpacity>
        </View>

        <Input
          placeholder='Confirm Password'
          secureTextEntry={secureTextEntryTwo}
          changeHandler={changeHandler}

        />
      </View>

      <View style={styles.termsContainer}>
        <Checkbox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)
          }
          style={styles.checkbox}
        />
        <Text style={styles.label}>Check our <Text style={styles.termsText} onPress={termsHandler}>Terms & Conditions</Text> out</Text>
      </View>
      <View>

        <Button children='Sign Up' disabled={toggleCheckBox} />
      </View>
      <View style={styles.loginBtnContainer}>
        <Text>Do you already have an account?</Text>
        <Button children='Proceed To Login' />
      </View>

    </View >
    </TouchableWithoutFeedback >

  )
};



const styles = StyleSheet.create({
  SignupContainer: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  inputContainerOne: {
    padding: 15,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: "center",
    width: 300,
  },
  inputContainerTwo: {
    marginTop: 8,
    padding: 15,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: "center",
    width: 300,
    flexDirection: 'row-reverse'
  },
  eyeIcon: {
    position: "absolute",
    right: '90%',

  },
  eyeIconone: {
    position: "absolute",
    right: '90%',

  },
  inputContainerThree: {
    marginTop: 8,
    marginBottom: 20,
    padding: 15,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: "center",
    width: 300,
    flexDirection: 'row-reverse'
  },
  termsContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  termsText: {
    color: 'blue'
  },
  loginBtnContainer: {
    marginTop: 15,
  },
});









export default Signup;
