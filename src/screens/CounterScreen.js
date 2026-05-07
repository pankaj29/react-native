import React, {useState} from "react";
import { Text, StyleSheet, View , Button} from "react-native";


const CounterScreen = () => {
    const [count, setCount] = useState(0);
    return (<View>   
    <Text>Current Count: {count}</Text>
          <Button
            onPress={() => setCount(count + 1)}
            title="Increase"
          />
          <Button
            onPress={() => setCount(0)}
            title="Reset"
          />
          <Button
            onPress={() => setCount(count - 1)}
            title="Decrease"
          />
    </View>
    );
};


const styles = StyleSheet.create({
});
export default CounterScreen;