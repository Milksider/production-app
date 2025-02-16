import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to="/" className={styles.mainLink} theme={AppLinkTheme.SECONDARY}>
                    {t('mainPage:title')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('aboutPage:title')}
                </AppLink>
            </div>
        </div>
    );
};
