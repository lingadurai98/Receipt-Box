import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Button from "../../components/button/Botton";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import {
  createEmailAddressText,
  dummyEmail,
  dummyEmailList,
} from "../../constants/Constant";

function CreateEmailAddress({ navigation }) {
  const [data, setData] = useState({
    input: "",
    showMsg: false,
    isError: false,
  });

  function inputChangeHandler(text) {
    setData((prev) => ({ ...prev, input: text }));
  }
  function submitHandler() {
    if (dummyEmail.includes(data.input)) {
      setData((prev) => ({ ...prev, showMsg: true, isError: true }));
      console.log(true);
    } else {
      setData((prev) => ({ ...prev, showMsg: true, isError: false }));
      console.log(false);
      navigation.navigate("home");
    }
  }
  return (
    <View style={styles.root__container}>
      <Header
        heading={createEmailAddressText.heading}
        text={createEmailAddressText.text}
      />
      <View style={styles.addressContainer}>
        <Input
          onChangeText={inputChangeHandler}
          style={styles.input}
          placeholder="Key in a name for your Email Address"
          placeholderColor="#9edc9f"
          textClr="green"
        />
        <Button style={styles.button} onPress={submitHandler}>
          Submit
        </Button>
        <View style={styles.summmary__container}>
          {!data.isError && data.showMsg && (
            <Text style={styles.summary__text}>
              Hey, Congratulations
              <Text style={styles.email}>{data.input}</Text>
              is available and has been created.
            </Text>
          )}
          {data.isError && data.showMsg && (
            <View>
              <Text style={[styles.summary__text, { color: "#c50000" }]}>
                Hey, We are sorry! random@getreceiptbox.com
                <Text style={styles.email}>{data.input}</Text>is already taken.
                Here are some suggestions
              </Text>
              <FlatList
                style={styles.suggestion}
                data={dummyEmailList}
                renderItem={(data) => (
                  <Text style={styles.suggestion__email} key={data.index}>
                    {data.item}
                  </Text>
                )}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default CreateEmailAddress;

const styles = StyleSheet.create({
  root__container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#d6f9d2",
  },
  addressContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  button: {
    marginVertical: 20,
  },

  summmary__container: {
    height: "100%",
    width: "100%",
  },

  summary__text: {
    textAlign: "center",
  },
  email: {
    fontWeight: "900",
  },
  suggestion: {
    padding: 10,
    marginTop: 10,
  },
  suggestion__email: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 2,
    fontWeight: "bold",
    color: "#0d0272",
  },
});
