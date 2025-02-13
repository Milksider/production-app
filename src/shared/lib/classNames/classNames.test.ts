import { classNames } from './classNames';

describe('classNames', () => {
    test('with single class', () => {
        expect(classNames('firstClass'))
            .toBe('firstClass');
    });

    test('with additional classes', () => {
        const expected = 'firstClass secondClass thirdClass';
        expect(classNames('firstClass', {}, ['secondClass', 'thirdClass']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'firstClass secondClass thirdClass';
        expect(classNames('firstClass', { secondClass: true, thirdClass: true }, []))
            .toBe(expected);
    });

    test('with different mods', () => {
        const expected = 'firstClass thirdClass';
        expect(classNames('firstClass', { secondClass: false, thirdClass: true, fourthClass: undefined }, []))
            .toBe(expected);
    });
});
