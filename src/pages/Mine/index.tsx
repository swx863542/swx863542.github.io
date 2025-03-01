import React from 'react'
import { Card, Row, Col, Statistic, Avatar, Descriptions } from 'antd'
import { useTranslation } from 'react-i18next'
import {
  BookOutlined,
  ClockCircleOutlined,
  ReadOutlined,
  UserOutlined,
} from '@ant-design/icons'
import ReactEcharts from 'echarts-for-react'
import styles from './styles.module.css'

const Mine: React.FC = () => {
  const { t } = useTranslation()

  const userInfo = {
    username: 'Reader001',
    joinDate: '2024-01-01',
    readingTime: '168h',
    booksCount: 42,
    completedCount: 15,
    currentReading: 3,
  }

  // 阅读偏好分析饼图配置
  const pieOption = {
    title: {
      text: t('mine.reading_preference'),
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['浪漫奇幻', '玄幻修真', '都市言情', '历史军事']
    },
    series: [
      {
        name: t('mine.category_distribution'),
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '浪漫奇幻' },
          { value: 735, name: '玄幻修真' },
          { value: 580, name: '都市言情' },
          { value: 484, name: '历史军事' }
        ]
      }
    ]
  }

  // 近期阅读统计折线图配置
  const lineOption = {
    title: {
      text: t('mine.recent_reading_stats'),
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      name: t('unit.words'),
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [
      {
        name: t('mine.reading_words'),
        type: 'line',
        data: [12000, 15000, 8000, 20000, 18000, 25000, 16000],
        smooth: true,
        areaStyle: {
          opacity: 0.3
        },
        itemStyle: {
          color: '#8853F8'
        },
        areaStyle: {
          color: '#8853F8',
          opacity: 0.1
        }
      }
    ]
  }

  return (
    <div className={styles.container}>
      <Card style={{ marginBottom: 24 }}>
        <Row gutter={16} align="middle">
          <Col>
            <Avatar size={64} icon={<UserOutlined />} />
          </Col>
          <Col>
            <h2>{userInfo.username}</h2>
            <p style={{ color: '#666' }}>
              {t('mine.joined')}: {userInfo.joinDate}
            </p>
          </Col>
        </Row>
      </Card>

      <Row gutter={16}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('mine.total_books')}
              value={userInfo.booksCount}
              prefix={<BookOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('mine.completed_books')}
              value={userInfo.completedCount}
              prefix={<ReadOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('mine.reading_books')}
              value={userInfo.currentReading}
              prefix={<BookOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('mine.reading_time')}
              value={userInfo.readingTime}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Card style={{ margin: "24px 0" }}>
        <Descriptions title={t('mine.reading_stats')} bordered>
          <Descriptions.Item label={t('mine.favorite_category')}>
            科幻
          </Descriptions.Item>
          <Descriptions.Item label={t('mine.average_daily_reading')}>
            2.5h
          </Descriptions.Item>
          <Descriptions.Item label={t('mine.completion_rate')}>
            35.7%
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title={t('mine.reading_stats')} className={styles.statsCard}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <ReactEcharts option={pieOption} style={{ height: '400px' }} />
              </Col>
              <Col span={12}>
                <ReactEcharts option={lineOption} style={{ height: '400px' }} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Mine 