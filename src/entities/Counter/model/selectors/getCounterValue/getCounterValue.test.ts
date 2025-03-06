import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/index';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getCounterValueTest', () => {
    test('should equal 10', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
