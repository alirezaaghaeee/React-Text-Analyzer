import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
    isLoggedIn: boolean;
    user: {
        name: string;
        email: string;
    } | null;
}

const initialState: LoginState = {
    isLoggedIn: false,
    user: null,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ name: string; email: string }>) {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
