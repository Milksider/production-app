import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LS_KEY } from 'shared/const/localStrorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LS_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LS_KEY);
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
