/*import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation, route }: any) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}> 🧑🏼‍🏫 Profile Screen</Text>



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
    },
    info: {
        fontSize: 20,
        marginVertical: 5,
    },
});

export default HomeScreen;
/* how to pass data from one page to another page. here i passsed the values from home and used route in
profile now then in profile it uses route.parm.{category} to receive values */
//pop s used to remove multiple screens from the stack ex=> navigate.pop(2) , here 2 means remove 2 screens
// popToTop is used to remove all scrrens except the first one ex=> navigate.popToTop();*/