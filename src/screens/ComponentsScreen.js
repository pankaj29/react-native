import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = "Pankaj Verma";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React Native</Text>
      <Text style={styles.nameStyle}>My Name is {name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;