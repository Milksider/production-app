import { Button } from 'shared/ui/Button';
import { render, screen } from '@testing-library/react';
import { ThemeButton } from 'shared/ui/Button/ui/Button';

describe('button', () => {
    test('test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('test theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
