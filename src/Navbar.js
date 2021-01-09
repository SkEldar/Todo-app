import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Navbar({ title }) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
