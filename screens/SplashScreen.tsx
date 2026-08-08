import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

function SplashScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color="#1976D2"
            />

            <Text style={styles.text}>
                Loading...
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

    text: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: '600',
    },
});

export default SplashScreen;