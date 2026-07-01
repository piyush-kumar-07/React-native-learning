import React from 'react';
import { Text, View } from 'react-native';

function Studid(Id: any) {
    return (
        <View>
            <Text> Hello{Id.name}</Text>
            <Text>Age: {Id.age}</Text>

        </View>
    );

}
export default Studid;
