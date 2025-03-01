import React from 'react'
import { Card, List, Progress } from 'antd'
import { useTranslation } from 'react-i18next'
import { 
  BookOutlined, 
  ClockCircleOutlined, 
  CalendarOutlined, 
  FireOutlined 
} from '@ant-design/icons'
import styles from './styles.module.css'

const StatisticCard: React.FC = () => {
  const { t } = useTranslation()

  const statisticData = [
    {
      icon: <BookOutlined className={styles.icon} />,
      title: t('today.reading'),
      value: `12,345 ${t('unit.words')}`,
      progress: 80,
      target: `${t('target')}: 15,000 ${t('unit.words')}`
    },
    {
      icon: <ClockCircleOutlined className={styles.icon} />,
      title: t('stats.daily_reading'),
      value: `120 ${t('unit.minutes')}`,
      progress: 60,
      target: `${t('target')}: 180 ${t('unit.minutes')}`
    },
    {
      icon: <CalendarOutlined className={styles.icon} />,
      title: t('stats.reading_days'),
      value: `15 ${t('unit.days')}`,
      progress: 50,
      target: `${t('target')}: 30 ${t('unit.days')}`
    },
    {
      icon: <FireOutlined className={styles.icon} />,
      title: t('stats.reading_streak'),
      value: `7 ${t('unit.days')}`,
      progress: 70,
      target: `${t('target')}: 10 ${t('unit.days')}`
    }
  ]

  return (
    <Card className={styles.card}>
      <List
        itemLayout="horizontal"
        dataSource={statisticData}
        renderItem={item => (
          <List.Item className={styles.listItem}>
            <div className={styles.statItem}>
              {item.icon}
              <div className={styles.content}>
                <h4>{item.title}</h4>
                <p>{item.value}</p>
                <Progress percent={item.progress} showInfo={false} />
                <span>{item.target}</span>
              </div>
            </div>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default StatisticCard 