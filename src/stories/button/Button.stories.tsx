import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Button} from '../../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonExample = Template.bind({});

ButtonExample.args = {
  children: 'Button text',
  variant: 'primary',
};
