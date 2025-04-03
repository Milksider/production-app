import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
}

/**   */
export const Text = ({
    className, text, title, theme = TextTheme.PRIMARY,
}: TextProps) => (
    <div className={classNames(styles.Text, {}, [className, styles[theme]])}>
        {title && <p className={styles.title}>{title}</p>}
        {text && <p className={styles.text}>{text}</p>}
    </div>
);
