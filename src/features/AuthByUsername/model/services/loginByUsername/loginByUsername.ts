import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LS_KEY } from 'shared/const/localStrorage';

interface LoginByUsernameParams {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameParams, {rejectValue: string}>(
    'login/loginByUsername',
    async (loginData, thunkAPI) => {
        try {
            const { data } = await axios.post<User>('http://localhost:8000/login', loginData);

            if (!data) {
                throw new Error();
            }
            localStorage.setItem(USER_LS_KEY, JSON.stringify(data));
            thunkAPI.dispatch(userActions.setAuthData(data));

            return data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
