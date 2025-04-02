import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.LoginForm}>
            <Input type="text" placeholder={t('Введите логин')} autoFocus />
            <Input type="text" placeholder={t('Введите пароль')} autoFocus />
            <Button className={styles.loginButton}>
                {t('Войти')}
            </Button>
        </div>
    );
};
