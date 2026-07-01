import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Usestate() {
    const [count, setcount] = useState(7);
    const [user, setuser] = useState({
        name: "Piyush",
        age: 30,
    })
    return (
        <View>
            <Text> count :{count}</Text>
            <Text>{user.name}</Text>
            <Text>{user.age}</Text>
            <Text>{user.age >= 18 ? "Adult" : "Minor"}</Text>

            <Button
                title="Increase Num"
                onPress={() => setcount(count + 1)}
            />
            <Button
                title="Reset Num"
                onPress={() => setcount(0)}
            />
            <Button //age incerease 
                title="Increase Age"
                onPress={() => setuser({
                    ...user,
                    age: user.age + 1,
                })} />

            <Button // age reset
                title="Reset Age"
                onPress={() => setuser({
                    ...user,//use of spread opertor
                    age: 0,
                })} />


        </View>
    );
}
export default Usestate;