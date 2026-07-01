import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
function ConditionalRenderingPrac() {
    const [showText, setshowText] = useState(false);
    return (

        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setshowText(!showText)}
            >
                <Text style={styles.button}>Show Message</Text>
            </TouchableOpacity>
            {showText ? (
                <Text style={styles.buttonText}>
                    Hello Piyush</Text>
            ) : null}

        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#a956acdc',
        padding: 20,
        marginBottom: 30,
        borderRadius: 10,
        color: 'white',

    },
    buttonText: {
        color: 'black',
        fontSize: 25,
        marginBottom: 20,
    }
})
export default ConditionalRenderingPrac;
//Instead of only showing it once, can you think how we could make the button: