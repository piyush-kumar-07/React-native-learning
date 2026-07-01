import React, { useEffect, useState, } from 'react';
import api from '../services/api';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    RefreshControl,
    Button,
} from 'react-native';
interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

function ApiFetchScreen() {



    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [refreshing, setRefreshing] = useState(false);


    const fetchUsers = async () => {
        try {

            const response = await api.get('/users');


            setUsers(response.data); //  Axios automatically parses JSON into response.data


        } catch (error) {

            setError('Something Went Wrong .\n Please try again');
        } finally {
            setLoading(false);
        }
    };
    const onRefresh = async () => {
        try {
            setRefreshing(true);
            await fetchUsers();
        } finally {
            setRefreshing(false);
        }
    };
    useEffect(() => {
        fetchUsers();

    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='blue' />
                <Text style={styles.text}>Loading users...</Text>
            </View>
        );
    } if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.error}>{error}</Text>
                <Button
                    title="Retry"
                    onPress={async () => {
                        setLoading(true);
                        setError('');

                        await fetchUsers();
                    }}
                />
            </View>

        );
    }


    return (
        <View style={styles.container2}>
            <FlatList
                data={users}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                keyExtractor={(item: User) => item.id.toString()}
                renderItem={({ item }: { item: User }) => (
                    <View style={styles.card}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                        <Text style={styles.phone}>{item.phone}</Text>
                        <Text style={styles.website}>{item.website}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',



    },
    container2: {
        flex: 1,

    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginVertical: 8,
        padding: 15,
        borderRadius: 10,
        elevation: 3,          // Android shadow
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    email: {
        fontSize: 15,
        color: 'gray',
        marginTop: 5,
    },
    phone: {
        fontSize: 13,
        color: 'gray',
        marginTop: 8,
    },
    website: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    error: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
});

export default ApiFetchScreen;