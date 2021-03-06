import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text>
                Enter your name: 
            </Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={ newValue => setName(newValue) }
            />
            <Text>Your name is: { name }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderWidth: 1,
        borderColor: '#000125',
        borderRadius: 10,
        height: 40,
        paddingLeft: 10
    }
});

export default TextScreen;