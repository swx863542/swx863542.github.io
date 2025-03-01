import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import router from './router'

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#8853F8',  // 主题紫色
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App 