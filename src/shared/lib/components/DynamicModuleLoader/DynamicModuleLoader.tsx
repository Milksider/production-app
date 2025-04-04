import { PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
    children, reducers, removeAfterUnmount = true,
}: PropsWithChildren<DynamicModuleLoaderProps>) => {
    const store = useStore() as ReduxStoreWithManager;
    // В момент монтирования компонента добавляем редюсер в общую тусовку
    useEffect(() => {
        Object.entries(reducers).forEach(([reducerKey, reducer]: ReducerListEntry) => {
            store.reducerManager.add(reducerKey, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerKey, reducer]: ReducerListEntry) => {
                    store.reducerManager.remove(reducerKey);
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
