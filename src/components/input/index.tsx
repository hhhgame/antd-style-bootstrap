import { Input, Space } from 'antd';

function MyInput () {
  return (
    <>
      <Space direction="vertical" size="middle" >
        <Input size="large" addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
        <Input size="small" addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
        <Input />
      </Space>
    </>
  )
}

export default MyInput
