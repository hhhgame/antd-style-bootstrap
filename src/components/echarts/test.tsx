import Config from './EchartConfig.tsx'
import Render from './render.tsx'
import {useEffect, useState} from "react";

const Test = () => {
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
  const [renderOption, setRenderOption] = useState({})
  const [wrapperStyles, setWrapperStyles] = useState({width: '100%', height: '300px'})
  useEffect(() => {
    // setRenderOption()
  }, []);
  useEffect(() => {

  }, []);
  const onConfigChange = (values: any) => {
    setWrapperStyles({
      width: !values.width ? '100%' : `${values.width}px`,
      height: !values.height ? '300px' : `${values.height}px`,
    })
    setRenderOption(JSON.parse(JSON.stringify(values.option)))
    // JSON.parse(JSON.stringify(values.option)
    // (prevState: any) => {
    //   return { ...prevState, ...values.option };
    // }
  }
  return (
    <div style={{
      display: 'flex',
      width: '100%',
    }}>
      <div style={{
        display: 'flex',
        flex: 1
      }}>
        <Render type={""} wrapperStyles={wrapperStyles} option={renderOption} />
      </div>

      <Config onChange={onConfigChange} />
    </div>
  )
}

export default Test
