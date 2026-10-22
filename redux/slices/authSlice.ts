import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

import type {
    PayloadAction,
} from '@reduxjs/toolkit';

interface User {
    id: string;
    name: string;
    email: string;
    mobile: string;
}
interface LoginCredentials {
    mobile: string;
    mpin: string;
}
interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
    loading: boolean;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
    loading: true,
};

const authSlice = createSlice({
    name: 'auth',

    initialState,

    reducers: {

        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },

        logout: state => {
            state.user = null;
            state.isLoggedIn = false;
        },

        finishLoading: state => {
            state.loading = false;
        },

    },
});

export const {
    login,
    logout,
    finishLoading,
} = authSlice.actions;

export default authSlice.reducer;