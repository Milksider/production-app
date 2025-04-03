import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore<StateSchema>(initialState?: StateSchema) {
    // const rootReducers: ReducersMapObject<StateSchema> = {
    //     user: userReducer,
    // };

    return configureStore({
        reducer: {
            user: userReducer,
            loginForm: loginReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
