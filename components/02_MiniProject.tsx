import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

function ProfileCard() {
    const [following, setFollowing] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/luffy.jpeg')}
                        style={styles.image}
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.name}>
                    Monkey.D.Luffy
                </Text>
                <Text style={styles.role}>
                    ⭐  Captain of Strawhat Pirates
                </Text>
                <Text style={styles.dream}>
                    ❤️Future Pirate King
                </Text>
                <Text style={styles.address}>
                    🌊 From East Blue
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setFollowing(!following)}
                    >
                        <Text style={styles.buttonText}>
                            {following ? 'following ✅' : 'Follow'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.messageButton}>
                        <Text style={styles.buttonText}>
                            💬 Message
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    card: {
        width: 320,
        padding: 20,
        backgroundColor: 'black',
        alignItems: 'flex-start',
        elevation: 20,
        marginBottom: 30,
        marginTop: 20,

    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',

    },
    image: {
        width: 180,
        height: 250,

    },
    name: {
        fontSize: 25,
        color: 'white',
        marginTop: 15,
        marginBottom: 20,
        letterSpacing: 2,
        fontWeight: 'bold',
    },
    role: {
        fontSize: 17,
        color: 'grey',
        marginTop: 5,
        marginBottom: 5,
        letterSpacing: 3,
    },
    dream: {
        fontSize: 17,
        color: 'grey',
        marginTop: 5,
        marginBottom: 5,
        letterSpacing: 3,

    },
    address: {
        fontSize: 17,
        color: 'grey',
        marginTop: 5,
        marginBottom: 5,
        letterSpacing: 3,

    },
    button: {
        flex: 1,
        backgroundColor: '#ff3b30',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 20,
        marginRight: 10,

    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        alignSelf: 'center'
    },
    messageButton: {
        flex: 1,
        backgroundColor: '#555',
        padding: 15,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
})
export default ProfileCard;