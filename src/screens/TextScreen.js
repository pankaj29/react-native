import React, {useState} from "react";
import { Text, StyleSheet, View , TextInput} from "react-native";


const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <TextInput
                placeholder="Enter your name"
                style={styles.input}
                value={name}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setName}
            />
             <Text>Hello, {name}!</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        fontSize: 18
    }
});



export default TextScreen;