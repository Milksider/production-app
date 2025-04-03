import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export const LoginForm = memo(() => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { setUsername, setPassword } = loginActions;
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);
    const errorText = t('Введен неправильный логин или пароль');

    const onChangeUsername = useCallback((value: string) => {
        dispatch(setUsername(value));
    }, [dispatch, setUsername]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(setPassword(value));
    }, [dispatch, setPassword]);

    const onLoginClick = () => {
        dispatch(loginByUsername({ username, password }));
    };

    return (
        <div className={styles.LoginForm}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={errorText} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                placeholder={t('Введите логин')}
                autoFocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={styles.loginButton}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
