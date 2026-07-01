import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function LoginScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login </Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    onPress={() => navigation.replace('MainApp')} // replace removes the current page makes it unaccessable
                />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 28,
        padding: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginVertical: 10,
        width: 200,

    },
});

export default LoginScreen;