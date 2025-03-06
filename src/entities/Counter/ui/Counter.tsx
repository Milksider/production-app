import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
    const counterValue = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const inc = () => {
        dispatch(counterActions.increment());
    };
    const dec = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button onClick={inc} data-testid="inc-btn">{t('Increment')}</Button>
            <Button onClick={dec} data-testid="dec-btn">{t('Decrement')}</Button>
        </div>
    );
};
