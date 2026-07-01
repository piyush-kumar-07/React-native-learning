import React from "react";
import { View, Text, FlatList } from 'react-native';

function FlatListPrac() {
    const students = [
        "Jadav",
        "Vishal",
        "Prem"
    ];

    return (
        <View>
            <FlatList
                data={students}
                scrollEnabled={false}   // 👈 Put it here
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text>{item}</Text>
                )}
            />
        </View>
    );
}

export default FlatListPrac;