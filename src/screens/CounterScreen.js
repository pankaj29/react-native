import React, {useState, useReducer} from "react";
import { Text, StyleSheet, View , Button} from "react-native";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        case 'reset':
            return { ...state, count: 0 };
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (<View>   
    <Text>Current Count: {state.count}</Text>
          <Button
            onPress={() => dispatch({ type: 'increment', payload: 1 })}
            title="Increase"
          />
          <Button
            onPress={() => dispatch({ type: 'reset', payload: 0 })}
            title="Reset"
          />
          <Button
            onPress={() => dispatch({ type: 'decrement', payload: 1 })}
            title="Decrease"
          />
    </View>
    );
};


const styles = StyleSheet.create({
});
export default CounterScreen;