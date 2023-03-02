import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/logo.png";

import { font__Color, heading__Color } from "../../constants/Constant";
const Header = (props) => {
  // FontFamily.loadAsync({
  //   "custom-font": require("../../assets/fonts/Poppins-Black.ttf"),
  // });

  // // Fonts
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // useEffect(() => {
  //   async function loadFonts() {
  //     await Font.loadAsync({
  //       "custom-font": {
  //         uri: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900",
  //       },
  //     });
  //     setFontsLoaded(true);
  //   }
  //   loadFonts();
  // }, []);

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <View style={[styles.headerContainer]}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.heading}>{props.heading}</Text>
      <Text style={[styles.text]}>{props.text}</Text>
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
    fontWeight: "900",
    marginVertical: 10,
    color: heading__Color,
  },
  logo: {
    height: 100,
    width: 100,
  },
  text: {
    textAlign: "center",
    paddingHorizontal: 30,
    fontSize: 12,
    color: font__Color,
  },
});

export default Header;
