import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import MainPageIcon from 'shared/assets/icons/MainPageIcon.svg';
import AboutPageIcon from 'shared/assets/icons/AboutPageIcon.svg';
import styles from './Sidebar.module.scss';

export type SidebarProps = {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, {
                [styles.collapsed]: collapsed,
            }, [className])}
        >
            <Button
                onClick={onToggle}
                data-testid="sidebar-toggle"
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={styles.item}
                >
                    <MainPageIcon className={styles.icon} />
                    <span
                        className={styles.link}
                    >
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECONDARY}
                    className={styles.item}
                >
                    <AboutPageIcon className={styles.icon} />
                    <span
                        className={styles.link}
                    >
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={styles.languageSwitcher} short={collapsed} />
            </div>
        </div>
    );
};
