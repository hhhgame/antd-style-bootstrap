import type { Preview } from "@storybook/react";
import { ConfigProvider } from "antd";
import { ThemeProvider } from 'styled-components';
import bootstrapTheme from '../src/bootstrap-theme/theme.json';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ConfigProvider theme={bootstrapTheme}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
        </ConfigProvider>
    ),
  ],
};

export default preview;
