import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
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
            >
                {t('Сайдбар')}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={styles.languageSwitcher} />
            </div>
        </div>
    );
};
