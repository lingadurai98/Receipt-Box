import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/button/Botton";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";

function CreateAddress() {
  return (
    <View style={styles.root__container}>
      <Header
        heading="Create an address"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur"
      />
      <View style={styles.addressContainer}>
        <Input
          style={styles.input}
          placeholder="Key in a name for your Email Address"
        />
        <Button style={styles.button}>Sumbit</Button>
        <View style={styles.summmary__container}>
          <Text style={styles.summary__text}>
            Hey, Congratulations -
            <Text style={styles.email}>Random@getreceiptbox.com</Text> is
            available and has been created.
          </Text>
        </View>
      </View>
    </View>
  );
}

export default CreateAddress;

const styles = StyleSheet.create({
  root__container: {
    flex: 1,
    paddingTop: 50,
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
  email: {},
});
