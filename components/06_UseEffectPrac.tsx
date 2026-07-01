import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Usestate from './Usestate';

function UseEffectPractice() {

    const [message, setMessage] = useState('Loading...');
    useEffect(() => {
        setMessage('welcome Piyush');
    }, []);
    return (
        <View>
            <Text>{message}</Text>
        </View>
    );

}
export default UseEffectPractice;
/*useEffect(() => {

    async function loadUsers() { // loaduser is a function

        const response = await fetch(// fetch will put url data into respone
            'https://jsonplaceholder.typicode.com/users'
        );

        const data = await response.json(); // here fetched data is in respone which is in JSON after convrting it and then it is trasnsfer into data

        setUsers(data); // now the data is in setuser and then the user will be updated
    }

    loadUsers();

}, []);*/

// Example of instagram post , that how they load 
/*const [posts, setPosts] = useState([]);
useEffect(()=> {
    async function  loadPosts(){
        const response = await fetch(...);
        const data = await response.json();

        setPosts(data);
    }
    loadPosts();
},[]);*/
