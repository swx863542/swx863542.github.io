import React from 'react'
import { Card, Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

interface LoginForm {
  username: string
  password: string
}

const Login: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const onFinish = async (values: LoginForm) => {
    try {
      // 这里添加实际的登录逻辑
      console.log('Login values:', values)
      message.success(t('login.success'))
      navigate('/shelf')
    } catch (error) {
      message.error(t('login.failed'))
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f0f2f5',
      }}
    >
      <Card
        title={t('login.title')}
        style={{ width: 300, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
      >
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: t('login.username_required'),
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder={t('login.username_placeholder')}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t('login.password_required'),
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder={t('login.password_placeholder')}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {t('login.submit')}
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center' }}>
            <Button type="link" onClick={() => navigate('/register')}>
              {t('login.register_now')}
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default Login 