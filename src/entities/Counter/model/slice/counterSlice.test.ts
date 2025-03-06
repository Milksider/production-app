import { counterActions, counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';

describe('counterSliceTest', () => {
    test('should dec', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('should inc', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
