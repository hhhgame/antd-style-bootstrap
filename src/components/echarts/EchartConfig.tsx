import * as ReactDOM from 'react-dom'
import React, {useEffect, useState} from 'react'
import JsonEditor from 'react-json-editor-ui'
import ReactJsonSyntaxHighlighter from 'react-json-syntax-highlighter'
import 'react-json-editor-ui/dist/react-json-editor-ui.cjs.development.css'
import 'react-json-editor-ui/dist/react-json-editor-ui.cjs.development.css'
import {
  Button,
  Form,
  Input,
  InputNumber,
  Space,
  Drawer,
  Card
} from 'antd';

interface EchartConfigProps {
  onChange?: (option: any) => void;
}

const EchartConfig = (props: EchartConfigProps) => {
  const { onChange } = props
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  const [editObject, setEditObject] = React.useState<any>({
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68]
        ],
        type: 'scatter'
      }
    ]
  })
  const [form] = Form.useForm();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const customValue = Form.useWatch((values) => {
    onChange && onChange({
      width: values.width,
      height: values.height,
      option: editObject
    })
  }, form);
  const onFinish = (values: any) => {
    console.log('Received values:', values);
    // onChange && onChange(values)
  }

  const onEditorChange = (data: any) => {
    if (!data) return
    setEditObject({...data})
  }

  const onDrawerClose = () => {
    setDrawerOpen(false)
    onChange && onChange({
      width: form.getFieldValue('width'),
      height: form.getFieldValue('height'),
      option: editObject
    })
  }

  useEffect(() => {
    onChange && onChange({
      width: form.getFieldValue('width'),
      height: form.getFieldValue('height'),
      option: editObject
    })
  }, [editObject])

  return (
    <>
      <Form form={form} onFinish={onFinish} {...formItemLayout} style={{ maxWidth: 600 }}>
        <Card title="尺寸">
          <Form.Item name="width" label="宽度" rules={[{ required: false, message: 'Please input!' }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item name="height" label="高度" rules={[{ required: false, message: 'Please input!' }]}>
            <InputNumber />
          </Form.Item>
        </Card>

        <Form.Item >
          <Space>
            <Button type="primary" onClick={() => {
              setDrawerOpen(true)
            }}>
              图表配置
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <Drawer width={900} height="100vh" title="Basic Drawer" open={drawerOpen} onClose={onDrawerClose}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          // padding: '20px',
        }}>
          <div style={{
            height: '100%',
            overflow: 'auto',
          }}>
            <JsonEditor
              // width={1024}
              data={editObject}
              onChange={onEditorChange}
              optionsMap={{
                color: [
                  { value: 'red', label: 'Red' },
                  { value: 'blue', label: 'Blue' },
                ],
                city: [
                  { value: 'beijing', label: 'Beijing' },
                  { value: 'shanghai', label: 'Shanghai' },
                ],
              }}
            />
          </div>

          <div
            style={{
              width: '50%',
              padding: '10px',
              marginLeft: '2px',
              boxShadow: '0px 0px 10px #eee',
              borderRadius: '2px',
            }}
          >
            <ReactJsonSyntaxHighlighter obj={editObject} />
          </div>
        </div>
      </Drawer>
    </>

  )
  // return <JSONEditor
  //   data={{
  //     root: {
  //       name: '123',
  //
  //     }
  //   }}
  //   collapsible
  //   // onChange={this.onJsonChange}
  //   view="dual"
  // />
}

export default EchartConfig
