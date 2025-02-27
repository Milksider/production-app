import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear_inverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
    M = 'm',
    L = 'l',
    XL = 'xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

/**   */
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods = {
        [styles.square]: square,
    };

    return (
        <button
            type="button"
            className={
                classNames(
                    styles.Button,
                    { ...mods },
                    [className, styles[theme], styles[size]],
                )
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
