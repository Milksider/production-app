import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div>
            <Button
                onClick={toggleLanguage}
                theme={ButtonTheme.CLEAR}
                className={classNames(styles.LanguageSwitcher, {}, [className])}
            >
                {t(short ? 'Короткий язык' : 'Язык')}
            </Button>
        </div>
    );
};
