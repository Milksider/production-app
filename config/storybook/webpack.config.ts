import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    // Находим и исправляем правило для SVG
    // eslint-disable-next-line
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (rule.test instanceof RegExp && rule.test.test('.svg')) {
            // Исключаем SVG из текущего правила (например, CSS loader)
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    // Добавляем правило для SVG
    config.module.rules.unshift({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/, // Применяется только для JSX/TSX файлов
        use: [{
            loader: '@svgr/webpack',
        }],
    });
    config.module.rules.push(buildCssLoader(true));

    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
    }));

    return config;
};
