import React from 'react'
import { Layout as AntLayout } from 'antd'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import styles from './styles.module.css'

const { Content } = AntLayout

const Layout: React.FC = () => {
  return (
    <AntLayout className={styles.layout}>
      <Header />
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </AntLayout>
  )
}

export default Layout 