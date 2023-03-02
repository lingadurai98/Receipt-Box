import { Image, StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import logo from "../../assets/images/logo.png";
import QRCode from "react-native-qrcode-svg";
import { button__Color, input__Text__Color } from "../../constants/Constant";

// Qr code reference
// https://aboutreact.com/generation-of-qr-code-in-react-native/
const Home = () => {
  return (
    <View style={styles.root__container}>
      <View style={styles.body__container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.greeting__text}>Welcome,</Text>
        <Text
          style={[
            styles.greeting__text,
            { fontWeight: "900", color: button__Color, fontSize: 24 },
          ]}
        >
          UserName
        </Text>
        <View style={styles.qr__container}>
          <QRCode
            //QR code value
            value={"https://www.youtube.com/watch?v=RAg7ygRpmKc"}
            //size of QR Code
            size={150}
            //Color of the QR Code (Optional)
            color="black"
            //Background Color of the QR Code (Optional)
            backgroundColor={input__Text__Color}
            // //Logo of in the center of QR Code (Optional)
            // logo={{
            //   url: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png",
            // }}
            // //Center Logo size  (Optional)
            // logoSize={30}
            // //Center Logo margin (Optional)
            // logoMargin={2}
            // //Center Logo radius (Optional)
            // logoBorderRadius={15}
            // //Center Logo background (Optional)
            // logoBackgroundColor="yellow"
          />
          <Text style={styles.qr__email}>random@getreceiptbox.com</Text>
          <Text style={styles.qr__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            labore animi officia veritatis sed provident in adipisicing elit.
            Fugit labore animi officia veritatis sed provident aliquid facilis
            odit labore animi officia veritatis sed provident in aliquid facilis
            odit molestias?
          </Text>
        </View>
      </View>
      <View style={styles.menu__container}>
        <Pressable style={styles.menu__btn}>
          <Text style={styles.menu__text}>Home</Text>
        </Pressable>
        <Pressable style={styles.menu__btn}>
          <Text style={styles.menu__text}>My Profile</Text>
        </Pressable>
        <Pressable style={styles.menu__btn}>
          <Text style={styles.menu__text}>Dashboard</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root__container: {
    justifyContent: "space-between",
    flex: 1,
    paddingTop: 30,
    backgroundColor: input__Text__Color,
  },
  body__container: {
    justifyContent: "center",
    alignItems: "center",
  },
  greeting__text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  logo: {
    height: 80,
    width: 80,
    marginBottom: 20,
  },
  qr__container: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  qr__email: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 30,
  },
  qr__text: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  menu__container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: button__Color,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  menu__btn: {
    alignItems: "center",
    justifyContent: "center",
  },
  menu__text: {
    textAlign: "center",
    fontSize: 18,
    color: input__Text__Color,
  },
});

export default Home;
