import ReactEChartsCore from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  LineChart,
  BarChart,
  // PieChart,
  // ScatterChart,
  // RadarChart,
  // MapChart,
  // TreeChart,
  // TreemapChart,
  // GraphChart,
  // GaugeChart,
  // FunnelChart,
  // ParallelChart,
  // SankeyChart,
  // BoxplotChart,
  // CandlestickChart,
  // EffectScatterChart,
  // LinesChart,
  // HeatmapChart,
  // PictorialBarChart,
  // ThemeRiverChart,
  // SunburstChart,
  // CustomChart,
} from 'echarts/charts';
import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';
import MyCustomTheme from '../../echartsThemes/my_custom.json';
// Register the required components
echarts.use(
  [LineChart, BarChart, CanvasRenderer]
);
echarts.registerTheme('my_theme', MyCustomTheme);
interface RenderProps {
  type: string;
  option: any;
  styles?: React.CSSProperties;
  wrapperStyles?: React.CSSProperties;
  theme?: string;
}
const Render = (props: RenderProps) => {
  const { type,
    theme = 'light',
    option, styles, wrapperStyles } = props;
  return (
    <div style={wrapperStyles}>
      <ReactEChartsCore
        echarts={echarts}
        style={{ height: 300, width: 800, ...styles }}
        option={option}
        theme={theme}
      />
    </div>
  );
}

export default Render;
