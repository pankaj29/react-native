import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}> Child #1 </Text>
      <Text style={styles.textTwoStyle}> Child #2 </Text>
      <Text style={styles.textThreeStyle}> Child #3 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "green",
    fontSize: 18,
    ...StyleSheet.absoluteFillObject, // same as below
        // position: "absolute",
        // top:0,
        // left:0,
        // bottom:0,
        // right:0,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "blue",
  }

});

export default BoxScreen;
