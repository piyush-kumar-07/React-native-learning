import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { useContext } from 'react';
import { UserContext } from '../context/UsersContext';
import Ionicons from '@react-native-vector-icons/ionicons';

function SettingsScreen({ navigation }: any) {// defining the type declaration to avoid tyescript error 
    const userContext = useContext(UserContext);// reads the data from usercontext

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
        <ScrollView style={styles.container}>

            <Text style={styles.screenTitle}>⚙️ Settings</Text>

            {/* Profile Card */}
            <View style={styles.profileCard}>
                <Text style={styles.profileName}>
                    {user.name}
                </Text>

                <Text style={styles.profileEmail}>
                    {user.email}
                </Text>

            </View>

            {/* ACCOUNT */}
            <Text style={styles.sectionTitle}>ACCOUNT</Text>

            <TouchableOpacity style={styles.settingRow}
                onPress={() => navigation.navigate('UserInfo')}>

                <View style={styles.rowContent}>

                    <View style={styles.leftSection}>

                        <Ionicons
                            name="person-outline"
                            size={24}
                            color="#1976D2"
                        />

                        <View style={styles.textContainer}>

                            <Text style={styles.settingTitle}>
                                User Information
                            </Text>

                            <Text style={styles.settingSubtitle}>
                                View your profile details
                            </Text>
                        </View>

                    </View>

                    <Ionicons
                        name="chevron-forward"
                        size={22}
                        color="gray"
                    />

                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingRow}>

                <View style={styles.rowContent}>

                    <View style={styles.leftSection}>

                        <Ionicons
                            name="log-out-outline"
                            size={24}
                            color="#D32F2F"
                        />

                        <View style={styles.textContainer}>
                            <Text style={styles.settingTitle}>
                                Logout
                            </Text>

                            <Text style={styles.settingSubtitle}>
                                Sign out of your account
                            </Text>
                        </View>

                    </View>

                    <Ionicons
                        name="chevron-forward"
                        size={22}
                        color="gray"
                    />

                </View>
            </TouchableOpacity>

            {/* PREFERENCES */}
            <Text style={styles.sectionTitle}>PREFERENCES</Text>

            <TouchableOpacity style={styles.settingRow}>
                <View style={styles.rowContent}>

                    <View style={styles.leftSection}>

                        <Ionicons
                            name="moon-outline"
                            size={24}
                            color="#1976D2"
                        />

                        <View style={styles.textContainer}>
                            <Text style={styles.settingTitle}>
                                Dark Mode
                            </Text>

                            <Text style={styles.settingSubtitle}>
                                Change application theme
                            </Text>
                        </View>

                    </View>

                    <Ionicons
                        name="chevron-forward"
                        size={22}
                        color="gray"
                    />

                </View>
            </TouchableOpacity>

            {/* GENERAL */}
            <Text style={styles.sectionTitle}>GENERAL</Text>

            <TouchableOpacity style={styles.settingRow}>
                <View style={styles.rowContent}>

                    <View style={styles.leftSection}>

                        <Ionicons
                            name="settings-outline"
                            size={24}
                            color="#1976D2"
                        />

                        <View style={styles.textContainer}>
                            <Text style={styles.settingTitle}>
                                App Settings
                            </Text>

                            <Text style={styles.settingSubtitle}>
                                Manage application preferences
                            </Text>
                        </View>

                    </View>

                    <Ionicons
                        name="chevron-forward"
                        size={22}
                        color="gray"
                    />

                </View>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f7',
    },

    screenTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 15,
    },

    profileCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 15,
        marginBottom: 25,
        elevation: 5,
    },

    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
    },

    profileEmail: {
        fontSize: 15,
        color: 'gray',
        marginTop: 4,
    },

    sectionTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#666',
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 8,
    },

    settingRow: {
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 15,
        marginBottom: 1,
    },

    rowContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    textContainer: {
        marginLeft: 15,
    },

    settingTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
    },

    settingSubtitle: {
        fontSize: 14,
        color: 'gray',
        marginTop: 3,
    },
});

export default SettingsScreen;