import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UsersContext';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const VALID_MOBILE = '1234567890';
const VALID_MPIN = '1234';

function LoginScreen({ navigation }: any) {

    const [form, setForm] = useState({
        name: '',
        email: "",
        mobile: '',
        mpin: '',
    })
    const [error, setError] = useState('');
    const userContext = useContext(UserContext);

    if (!userContext) {
        return null;
    }

    const { setUser } = userContext;
    const handleChange = (
        key: keyof typeof form,
        value: string,
    ) => {
        setForm({
            ...form,
            [key]: value,
        });
    };

    const validateForm = () => {

        if (form.name.trim() === '') {
            setError('Username is required');
            return false;
        }

        if (form.email.trim() === '') {
            setError('Email is required');
            return false;
        }

        if (!form.email.includes('@')) {
            setError('Email must contain @');
            return false;
        }



        if (form.mobile.trim() === '') {
            setError('Mobile Number is required');
            return false;
        }

        if (form.mobile.length !== 10) {
            setError('Mobile Number must be 10 digits');
            return false;
        }

        if (form.mpin.trim() === '') {
            setError('MPIN is required');
            return false;
        }

        if (form.mpin.length !== 4) {
            setError('MPIN must be 4 digits');
            return false;
        }

        return true;
    };

    const handleLogin = () => {

        if (!validateForm()) {
            return;
        }



        if (form.mobile !== VALID_MOBILE || form.mpin !== VALID_MPIN) {
            setError('Invalid Mobile Number or MPIN');
            return;
        }

        setError('');

        setUser({
            name: form.name,
            email: form.email,
            mobile: form.mobile,
        });

        navigation.replace('MainApp');
    };
    return (
        <View style={styles.container}>

            {error ? (
                <Text style={styles.error}>{error}</Text>
            ) : null}

            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter Username"
                value={form.name}
                onChangeText={(text) => handleChange("name", text)}// computed property name
                autoCapitalize="words"
            />

            <TextInput
                style={styles.input}
                placeholder="Enter Email"
                value={form.email}
                onChangeText={(text) => handleChange('email', text)}

                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter Mobile Number"
                value={form.mobile}
                onChangeText={(text) => handleChange('mobile', text)}
                keyboardType="number-pad"
                maxLength={10}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter MPIN"
                value={form.mpin}
                onChangeText={(text) => handleChange('mpin', text)}
                keyboardType="number-pad"
                maxLength={4}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25,
        backgroundColor: '#f5f5f5',
    },

    title: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 35,
        color: '#222',
    },

    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 18,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#1976D2',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    error: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 15,
    },
});

export default LoginScreen;