import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './Input';
import { VariantsInput } from './Variants.Input';


const meta = {
  title: 'Example/AntInput',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    defaultValue: { control: 'text' },
    value: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;
const metaVariants = {
  title: 'Example/AntInputVariants',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    defaultValue: { control: 'text' },
    value: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof VariantsInput>;

export default meta;
// export default metaVariant\]=[-p55
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    primary: true,
    isVariant: false,
    label: 'Input',
  },
};
export const Variants: Story = {
  args: {
    primary: true,
    isVariant: true,
    label: 'InputVariants',
  },
};
export const PrefixAndSuffix: Story = {
  args: {
    primary: true,
    isfix: true,
    label: 'InputVariants',
  },
};
//
// export const Secondary: Story = {
//   args: {
//     label: 'Input',
//   },
// };
//
// export const Normal: Story = {
//   args: {
//     size: '',
//     label: 'Input',
//   },
// };
//
// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Input',
//   },
// };
//
// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Input',
//   },
// };
