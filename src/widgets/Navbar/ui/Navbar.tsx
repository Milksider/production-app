import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Home</AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>About</AppLink>
        </div>
    </div>
);
