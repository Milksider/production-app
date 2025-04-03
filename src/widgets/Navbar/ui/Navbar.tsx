import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getAuthData);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onCloseAuthModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenAuthModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = () => {
        dispatch(userActions.logout);
    };

    if (authData) {
        return (
            <div className={classNames(styles.navbar, {}, [className])}>
                <Button className={styles.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogOut}>
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button className={styles.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenAuthModal}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
        </div>
    );
};
