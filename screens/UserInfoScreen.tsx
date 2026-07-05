import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
    UserContext
} from '../context/UsersContext'
import { useContext } from 'react';

const UserInfoScreen = () => {
    const userContext = useContext(UserContext);
    if (!userContext) {
        return null;
    }
    const { user } = userContext;
    if (!user) {
        return (
            <View>
                <Text>No user loaded</Text>
            </View>
        );
    }

    return (
        <View>
            <Text style={styles.userTitle}> User Information </Text>
            <Text style={styles.info}>name:{user.name}</Text>
            <Text style={styles.info}> Email:{user.email}</Text>
            <Text style={styles.info}> Mobile:{user.mobile}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    info: {

        marginTop: 10,
    },
    userTitle: {
        fontWeight: 'bold',
        fontSize: 25,
    }

})
export default UserInfoScreen;