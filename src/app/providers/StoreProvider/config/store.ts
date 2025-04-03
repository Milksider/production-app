import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore<StateSchema>(initialState?: StateSchema) {
    // const rootReducers: ReducersMapObject<StateSchema> = {
    //     counter: counterReducer,
    //     user: userReducer,
    // };

    return configureStore({
        reducer: {
            counter: counterReducer,
            user: userReducer,
            loginForm: loginReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
