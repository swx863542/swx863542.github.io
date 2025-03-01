import React, { useState } from 'react'
import { Layout, Dropdown, Space, Menu, Modal, Tabs, Input, Button, message } from 'antd'
import { useTranslation } from 'react-i18next'
import { 
  GlobalOutlined, 
  UserOutlined, 
  HomeOutlined,
  BookOutlined,
  ReadOutlined,
  UserSwitchOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import styles from './styles.module.css'

const { Header: AntHeader } = Layout
const { TabPane } = Tabs

const Header: React.FC = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [currentUser, setCurrentUser] = useState('')

  const menuItems = [
    { 
      key: '/', 
      label: t('header.home'),
      icon: <HomeOutlined />
    },
    { 
      key: '/books', 
      label: t('header.books'),
      icon: <BookOutlined />
    },
    { 
      key: '/shelf', 
      label: t('header.shelf'),
      icon: <ReadOutlined />
    },
    { 
      key: '/mine', 
      label: t('header.mine'),
      icon: <UserSwitchOutlined />
    },
  ]

  const handleLogin = () => {
    if (username === 'admin' && password === '888888') {
      setIsLoggedIn(true)
      setCurrentUser('admin')
      setIsLoginModalOpen(false)
      message.success(t('login.success'))
      setUsername('')
      setPassword('')
    } else {
      message.error(t('login.failed'))
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser('')
    navigate('/')
    message.success(t('logout.success'))
  }

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      label: '个人中心',
      icon: <UserOutlined />,
      onClick: () => navigate('/mine')
    },
    {
      key: 'shelf',
      label: '我的书架',
      onClick: () => navigate('/shelf')
    },
    {
      key: 'stats',
      label: '阅读统计',
      onClick: () => navigate('/mine')
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      label: '退出登录',
      icon: <LogoutOutlined />,
      danger: true,
      onClick: handleLogout
    }
  ]

  const languageItems: MenuProps['items'] = [
    {
      key: 'zh',
      label: '中文',
      onClick: () => i18n.changeLanguage('zh'),
    },
    {
      key: 'en',
      label: 'English',
      onClick: () => i18n.changeLanguage('en'),
    },
  ]

  return (
    <>
      <AntHeader className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>悦读小说网</div>
        </div>
        <div className={styles.right}>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={({ key }) => navigate(key)}
            className={styles.menu}
          />
          <Dropdown menu={{ items: languageItems }} placement="bottomRight">
            <Space style={{ cursor: 'pointer', color: '#333' }}>
              <GlobalOutlined />
              {i18n.language === 'zh' ? '中文' : 'English'}
            </Space>
          </Dropdown>
          {isLoggedIn ? (
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <div className={styles.loginBtn}>
                <Space>
                  <UserOutlined />
                  {`欢迎，${currentUser}`}
                </Space>
              </div>
            </Dropdown>
          ) : (
            <div className={styles.loginBtn}>
              <Space onClick={() => setIsLoginModalOpen(true)}>
                <UserOutlined />
                {t('header.login')}
              </Space>
            </div>
          )}
        </div>
      </AntHeader>

      <Modal
        open={isLoginModalOpen}
        onCancel={() => setIsLoginModalOpen(false)}
        footer={null}
        width={400}
      >
        <Tabs defaultActiveKey="password" centered>
          <TabPane tab={t('header.login')} key="password">
            <div className={styles.loginForm}>
              <Input 
                placeholder={t('login.username_placeholder')} 
                className={styles.input}
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <Input.Password 
                placeholder={t('login.password_placeholder')} 
                className={styles.input}
                value={password}
                onChange={e => setPassword(e.target.value)}
                onPressEnter={handleLogin}
              />
              <Button type="primary" block onClick={handleLogin}>
                {t('header.login')}
              </Button>
            </div>
          </TabPane>
          <TabPane tab={t('login.qrcode')} key="qrcode">
            <div className={styles.qrcodeContainer}>
              <img src="/qrcode.png" alt={t('login.qrcode')} />
              <p>{t('login.scan_tip')}</p>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  )
}

export default Header 