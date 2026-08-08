import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';

import HomeScreen from '../screens/HomeScreen';
//import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ApiFetchScreen from '../screens/13_ApiFetchScreen';
import UserInfoScreen from '../screens/UserInfoScreen';
import { useContext } from 'react';
import { UserContext } from '../context/UsersContext';
import SplashScreen from '../screens/SplashScreen';
const Stack = createNativeStackNavigator();

function AppNavigator() {
    const userContext = useContext(UserContext);

    if (!userContext) {
        return null;
    }

    const { user, loading } = userContext;
    if (loading) {
        return <SplashScreen />;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    user ?
                        <Stack.Screen
                            name="MainApp"
                            component={BottomTabs}
                            options={{ headerShown: false }}
                        />
                        :

                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />



                }




                <Stack.Screen
                    name="UserInfo"
                    component={UserInfoScreen}
                    options={{ headerShown: true }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;