import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function TouchableOpacityPrac() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
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
        backgroundColor: '#5af8b6dc',
        padding: 15,
        borderRadius: 10,
        marginBottom: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
    },
});

export default TouchableOpacityPrac;
