import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

function PressablePrac() {
    return (
        <View style={styles.container}>

            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed ? 'red' : 'blue',
                    },
                ]}
            >
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </Pressable>

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
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});

export default PressablePrac;