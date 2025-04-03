import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const WithTitle = Template.bind({});
WithTitle.args = {
    title: 'Заголовок',
};

export const WithText = Template.bind({});
WithText.args = {
    text: 'текст',
};

export const WithTextAndTitle = Template.bind({});
WithTextAndTitle.args = {
    title: 'Заголовок',
    text: 'текст',
};

export const WithTitleDark = Template.bind({});
WithTitleDark.args = {
    title: 'Заголовок',
};
WithTitleDark.decorators(ThemeDecorator(Theme.DARK));

export const WithTextDark = Template.bind({});
WithTextDark.args = {
    text: 'текст',
};
WithTextDark.decorators(ThemeDecorator(Theme.DARK));

export const WithTextAndTitleDark = Template.bind({});
WithTextAndTitleDark.args = {
    title: 'Заголовок',
    text: 'текст',
};
WithTextAndTitleDark.decorators(ThemeDecorator(Theme.DARK));

export const Error = Template.bind({});
Error.args = {
    title: 'Заголовок',
    text: 'текст',
    theme: TextTheme.ERROR,
};
