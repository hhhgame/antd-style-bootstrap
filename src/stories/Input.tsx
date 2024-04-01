import React from "react";
import {Input as AntInput, ConfigProvider, Space, Flex} from "antd";
import {PrefixAndSuffix} from "./Input.stories.ts";

const Variants = () => {
  return (
    <Space direction="vertical">
      <Flex gap="middle" align="center" justify="center">
        <div>Filled</div>
        <AntInput placeholder="Outlined" />
      </Flex>

      <Flex gap="middle" align="center" justify="center">
        <div>Filled</div>
        <AntInput variant="filled"></AntInput>
      </Flex>
      <Flex gap="middle" align="center" justify="center">
        <div>Borderless</div>
        <AntInput placeholder="borderless" variant="borderless"></AntInput>
      </Flex>

    </Space>
  )
}

const PreFixAndSuffix = () => {
  return (
    <Space direction="vertical">
      <Flex gap="middle" align="center" justify="center">
        <div>Prefix</div>
        <AntInput placeholder="" prefix="prefix" />
      </Flex>
      <Flex gap="middle" align="center" justify="center">
        <div>Suffix</div>
        <AntInput placeholder="" suffix="suffix" />
      </Flex>
    </Space>
  )
}

const Input = ({
                 ...props
               }) => {
  console.log('props', props)
  if (props.isVariant) {
    return (
      <Variants />
    )
  }
  if (props.isfix) {
    return (
      <PreFixAndSuffix />
    )
  }
  return (
    <Space direction="vertical">
      <Flex gap="middle" align="center" justify="center">
        <div>Normal</div>
        <AntInput  {...props}></AntInput>
      </Flex>
      <Flex gap="middle" align="center" justify="center">
        <div>Large</div>
        <AntInput  {...props} size="large"></AntInput>
      </Flex>
      <Flex gap="middle" align="center" justify="center">
        <div>Small</div>
        <AntInput  {...props} size="small"></AntInput>
      </Flex>

    </Space>
  );
}

export {Input};
