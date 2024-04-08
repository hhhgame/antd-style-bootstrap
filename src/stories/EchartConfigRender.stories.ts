import Test from "../components/echarts/test.tsx";

import {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: 'Example/Echarts',
  component: Test,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'left',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: '',
    option: {}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Config>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConfigRenderObj: Story = {

};
