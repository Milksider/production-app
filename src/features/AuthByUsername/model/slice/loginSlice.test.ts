import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSliceTest', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('aboba'),
            ),
        ).toEqual({ username: 'aboba' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('aboba'),
            ),
        ).toEqual({ password: 'aboba' });
    });
});
