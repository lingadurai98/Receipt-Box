import React from "react";
import { StyleSheet } from "react-native";
import { background__Color, heading__Color } from "../../constants/Constant";
import { View } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";

const Menubar = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  menu__container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: heading__Color,
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
    color: background__Color,
  },
});

export default Menubar;
