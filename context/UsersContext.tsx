import React, { createContext, useState } from 'react';
import {
    useEffect

} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface User {
    id: string;
    name: string;
    email: string;
    mobile: string;
}
interface UserContextType {//it only describes the shape of the context
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;//it defines the type of setuser that it updates the user 
    //and user can be either a new user orobject or funtion.

    loading: boolean;
}

export const UserContext = createContext<UserContextType | null>(null);
export function UserProvider({
    children,//accessing argument of a function directly raher than using {agru.childrn} ow only children
}: {
    children: React.ReactNode;//the  childern must be a reactnode(anything that could be rendered by react)
}) {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const loadUser = async () => {
        try {
            const savedUser = await AsyncStorage.getItem("user");

            if (savedUser) {
                const user = JSON.parse(savedUser);
                setUser(user);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        loadUser();
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                loading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}