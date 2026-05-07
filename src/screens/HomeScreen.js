import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components"
      />
            <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />

      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
