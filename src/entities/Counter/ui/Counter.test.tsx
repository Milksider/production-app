import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Counter } from 'entities/Counter';
import { userEvent } from '@storybook/testing-library';

describe('counter', () => {
    test('render test', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('inc-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('dec-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
