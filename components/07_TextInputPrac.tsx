import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

function TextInputPrac() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    return (
        <View>

            <TextInput
                placeholder='Enter your name '
                onChangeText={(text) => setName(text)}

            />
            <Text>Hello {name}</Text>
            <TextInput
                placeholder='Enter your age '
                onChangeText={(text) => setAge(text)}
            />
            <Text>I'm {age} years old</Text>
        </View>
    );
}
export default TextInputPrac;





