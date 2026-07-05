import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { UserContext } from '../context/UsersContext';

function HomeScreen({ navigation }: any) {
    const userContext = useContext(UserContext);

    if (!userContext) {
        return null;
    }

    const { user } = userContext;
    if (!user) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🏠 Home Screen</Text>
            <Text style={styles.subtitle}>
                Welcome, {user.name} 👋
            </Text>


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
        padding: 20,
        marginBottom: 20,
    },
    subtitle: {

    },
});

export default HomeScreen;