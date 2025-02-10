import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink} from "shared/ui";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Home</AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>
        </div>
    );
};