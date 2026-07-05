import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import HomeScreen from '../screens/HomeScreen';
//import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ApiFetchScreen from '../screens/13_ApiFetchScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#8fd9f1',
                tabBarInactiveTintColor: '#ff9b52',

                tabBarStyle: {
                    height: 65,
                    backgroundColor: "#ffffff",
                    borderTopWidth: 2,
                    borderTopColor: "#e5e5e5",
                },

                tabBarLabelStyle: {
                    fontSize: 13,
                    fontWeight: '600',
                },
                headerStyle: {
                    backgroundColor: "#000",

                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            color={color}
                            size={size}

                        />
                    ),
                }}
            />




            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "settings" : "settings-outline"}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Api"
                component={ApiFetchScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "cloud-download" : "cloud-download-outline"}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default BottomTabs;




/*<Tab.Screen
               name="Profile"
               component={ProfileScreen}
               options={{
                   tabBarIcon: ({ focused, color, size }) => (
                       <Ionicons
                           name={focused ? "person" : "person-outline"}
                           color={color}
                           size={size}
                       />
                   ),
               }}
           />*/