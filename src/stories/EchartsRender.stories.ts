import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Render from '../components/echarts/render.tsx';
import radarOption from '../sampleOptions/radar.ts';
const lineChartOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'line'
  }]
}
const barChartOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'bar'
  }]
}
const pieChartOption = {
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '直接访问'
        },
        {
          value: 234,
          name: '联盟广告'
        },
        {
          value: 1548,
          name: '搜索引擎'
        }
      ]
    }
  ]
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Echarts',
  component: Render,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
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
} satisfies Meta<typeof Render>;

export default meta;
type Story = StoryObj<typeof meta>;


export const LineChart: Story = {
  args: {
    option: lineChartOption,
    type: 'line',
    theme: 'light',
    wrapperStyles: {
      width: '800px',
    },
    styles: {

    }
    // label: 'LineChart',
  },
};
export const BarChart: Story = {
  args: {
    option: barChartOption,
    type: 'bar',
    wrapperStyles: {
      width: '800px',
    },
    theme: 'dark',
    styles: {},
  }
};

export const PieChart: Story = {
  args: {
    option: pieChartOption,
    type: 'bar',
    wrapperStyles: {
      width: '800px',
    },
    theme: 'light',
    styles: {},
  }
}
export const RadarChart: Story = {
  args: {
    option: radarOption,
    type: 'bar',
    wrapperStyles: {
      width: '800px',
    },
    theme: 'my_theme',
    styles: {},
  }
}

