import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
} from '../../model/selectors';
import styles from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(() => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { setUsername, setPassword } = loginActions;
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
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
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
