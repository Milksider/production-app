import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Dark Link',
    theme: AppLinkTheme.SECONDARY,
};
