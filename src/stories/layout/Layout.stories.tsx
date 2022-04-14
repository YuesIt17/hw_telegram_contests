import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Layout} from '../../components/Layout';
import {Button} from '../../components/Button';

export default {
  title: 'Example/Layout',
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const LayoutExample = Template.bind({});

LayoutExample.args = {
  actions: (
    <div>
      {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
      <Button variant="primary" onClick={() => {}}>
        My actions
      </Button>
    </div>
  ),
  children: (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      Layout content
    </div>
  ),
};
