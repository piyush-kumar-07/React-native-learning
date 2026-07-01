//This  Mini_project shows the Login UI , where it accept the input and also show the result 
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
function LoginPrac() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submittedName, setSubmittedName] = useState('');
    const [submittedEmail, setSubmittedEmail] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = () => {
        setSubmittedName(name);
        setSubmittedEmail(email);
        setLoggedIn(true);

    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Login Form
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter  Name '
                onChangeText={(text) => setName(text)}
            />
            <TextInput style={styles.input}
                placeholder='Enter  Email '
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput style={styles.input}
                placeholder='Enter Password'
                secureTextEntry={!showPassword}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
            >
                <Text style={styles.hidePass}>
                    {showPassword ? '🙈' : '👁️'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin} >
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>

            {loggedIn ? (
                <View style={styles.resultBox}>
                    <Text style={styles.resultText}>
                        Name : {submittedName}
                    </Text>

                    <Text style={styles.resultBox}>
                        Email: {submittedEmail}
                    </Text>
                </View>
            ) : null}

        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',

    },
    heading: {
        fontSize: 15,
        textAlign: 'center',
        padding: 12,
        marginBottom: 20,
        backgroundColor: '#f167cf',
        borderRadius: 15,
    },
    input: {
        fontSize: 12,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        marginBottom: 25,

    },
    hidePass: {
        marginBottom: 25,
        fontSize: 13,
        backgroundColor: '#f167cf',
        padding: 10,

    },
    button: {
        fontSize: 5,
        backgroundColor: "#24636e",
        padding: 11,
        borderRadius: 10,
        alignItems: 'center',

    },
    buttonText: {
        color: 'white',
        fontSize: 15,

    },
    resultBox: {
        marginTop: 25,
        padding: 20,
        borderWidth: 2,
        borderRadius: 10,
    },
    resultText: {
        fontSize: 20,
        marginBottom: 15,

    },

});
export default LoginPrac;