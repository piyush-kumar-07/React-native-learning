import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> ⚙️ Settings</Text>

            <Button
                title="Logout"
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
                    })
                }
            />
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
        fontWeight: 'bold',
        marginBottom: 20,
    },

    buttonContainer: {
        width: 220,
        marginVertical: 10,
    },
});

export default HomeScreen;