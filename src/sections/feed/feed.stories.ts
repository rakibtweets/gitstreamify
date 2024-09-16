import type { Meta, StoryObj } from '@storybook/react';

import { repositories } from 'src/_mock/repositories';

import FeedCards from './feed-cards';

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof FeedCards> = {
  title: 'gitStreamify/component/feed',
  component: FeedCards,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof FeedCards>;

export const Default: Story = {
  args: {
    items: repositories,
  },
};
