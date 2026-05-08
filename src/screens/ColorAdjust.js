import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const ColorAdjust = () => {
      const [red, setRed] = useState(0);
      const [green, setGreen] = useState(0);
      const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColorCounter 
      onIncrease={() => setRed(Math.min(255, red + 10))} 
      onDecrease={() => setRed(Math.max(0, red - 10))} 
      color="Red" />

      <ColorCounter 
      onIncrease={() => setBlue(Math.min(255, blue + 10))} 
      onDecrease={() => setBlue(Math.max(0, blue - 10))} 
      color="Blue" />

      <ColorCounter 
      onIncrease={() => setGreen(Math.min(255, green + 10))} 
      onDecrease={() => setGreen(Math.max(0, green - 10))} 
      color="Green" />

         <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} /> 
         
    </View>


  );
};

const styles = StyleSheet.create({});

export default ColorAdjust;
