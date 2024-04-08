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
import {useEffect} from "react";
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
  useEffect(() => {
    console.log('option change:', option)
  }, [option]);
  return (
    <div style={wrapperStyles}>
      <ReactEChartsCore
        notMerge={true}
        lazyUpdate={false}
        echarts={echarts}
        style={{ height: '100%', width: '100%', ...styles }}
        option={option}
        theme={theme}
      />
    </div>
  );
}

export default Render;
