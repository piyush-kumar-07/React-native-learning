//This file is made to fetch the users names from url 
/*import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Usestate from './Usestate';
function UseEffectPrac2() {// Here the UseEffect Prac2 is the component when this will load the useEffect will run 
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        async function loadusers() {
            const responses = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            const data = await responses.json();
            setUsers(data);
        }
        loadusers();
    }, []);
    return (
        <View>
            <Text>User List Fetched from URL</Text>
            {users.map((users, index) => (
                <Text key={index}>
                    {users.name}
                </Text>
            ))}
        </View>
    );

}
export default UseEffectPrac2;*/