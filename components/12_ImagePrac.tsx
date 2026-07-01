import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

function ImagePrac() {
    return (
        <View style={styles.container}>
            <Text style={styles.imageText}>
                Monkey.D.Luffy
            </Text>

            <Image
                source={require('../assets/luffy.jpeg')}
                style={styles.image}
                resizeMode="cover"
            />

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: 220,
        height: 320,
        borderRadius: 100,// for perfect circle like insta's story or post type use borderRadius = width % 2 

        elevation: 80,
        borderWidth: 3,
        borderColor: 'gold',
        marginBottom: 20,
        padding: 40,
        resizeMode: 'contain',
        overflow: "hidden",// used when the image exceed the container use this with hidden,  scroll or visible
    },
    imageText: {
        fontSize: 25,
        padding: 10,// creates gap between text and the border
        color: '#101101',
        backgroundColor: 'lightgreen',
        margin: 20,

    },
});
export default ImagePrac;
/*
require()
│
├── Used for local files
├── Finds the file
├── Bundles it with the app
└── Gives it to the component

fetch()
│
├── Used for API data
├── Downloads from internet
└── Returns JSON or other data

uri
│
├── Used for online images
├── Downloads image from URL
└── Displays it*/