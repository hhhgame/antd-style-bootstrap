import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ConfigProvider } from 'antd';
import MyInput from "./components/input";

function App() {

  // @ts-ignore
  return (
    <ConfigProvider
      theme={{
        // cssVar: true,
        token: {
          colorBorder: 'var(--bs-border-color)',
          // @ts-ignore
          borderRadiusLG: 'var(--bs-border-radius-lg)',
          // @ts-ignore
          borderRadiusSM: 'var(--bs-border-radius-sm)',
          // @ts-ignore
          borderRadius: 'var(--bs-border-radius)',
          // colorError: 'var(--bs-blue)',
        },
        components: {
          Input: {
            // colorError: 'var(--bs-red)',
            activeShadow: 'none',
            colorPrimary: 'var(--bs-warning)',
            // algorithm: true, // 启用算法
            colorBgContainer: 'transparent',
            activeBg: 'var(--bs-white)',
            activeBorderColor: 'var(--bs-border-color)',
            hoverBorderColor: 'var(--bs-border-color)',
            addonBg: 'var(--bs-tertiary-bg)',
            // @ts-ignore
            paddingBlock: '.375rem', //'calc(.25rem + var(--bs-border-width))',
            // @ts-ignore
            paddingBlockLG: '.5rem', //'calc(.5rem + var(--bs-border-width))',
            // @ts-ignore
            paddingBlockSM: '.25rem', //'calc(.5rem + var(--bs-border-width))',
            // @ts-ignore
            paddingInline: '.75rem', //'calc(.375rem + var(--bs-border-width))',
            // @ts-ignore
            paddingInlineLG: '1rem', //'calc(.75rem + var(--bs-border-width))',
            // @ts-ignore
            paddingInlineSM: '.5rem', //'calc(.25rem + var(--bs-border-width))',
            // @ts-ignore
            inputFontSize: '1rem',
            // @ts-ignore
            inputFontSizeSM: '.75rem',
            // @ts-ignore
            inputFontSizeLG: '1.25rem',
          }
        },

        // token: {
        //   // Seed Token，影响范围大
        //   colorPrimary: 'transparent',
        //   borderRadius: 200,
        //
        //   // 派生变量，影响范围小
        //   colorBgContainer: '#f6ffed',
        // },
      }}
    >
      <div className="card">
        <MyInput />
      </div>
    </ConfigProvider>
  )
}

export default App
