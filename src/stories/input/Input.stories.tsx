import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Input} from '../../components/Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputExample = Template.bind({});

InputExample.args = {};
