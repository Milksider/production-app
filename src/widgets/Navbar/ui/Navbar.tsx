import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(styles.navbar, {}, [className])}>
        <div className={styles.links}>
            /
        </div>
    </div>
);
