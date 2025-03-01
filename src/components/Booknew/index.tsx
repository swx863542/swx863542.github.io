import React from 'react'
import { List, Rate, Tag } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import styles from './styles.module.css'

interface Book {
  id: number
  title: string
  author: string
  rating: number
  description: string
  publishTime: string
}

const Booknew: React.FC = () => {

  const newBooks: Book[] = [
    {
      id: 1,
      title: '人生海海',
      author: '麦家',
      rating: 4.7,
      description: '麦家全新长篇力作，直面生命的真相...',
      publishTime: '2024-03-20'
    },
    {
      id: 2,
      title: '克拉拉与太阳',
      author: '石黑一雄',
      rating: 4.6,
      description: '诺贝尔文学奖得主石黑一雄暌违十年重磅新作...',
      publishTime: '2024-03-19'
    },
    {
      id: 3,
      title: '蛤蟆先生去看心理医生',
      author: '罗伯特·戴博德',
      rating: 4.8,
      description: '一本关于心理治疗的寓言故事...',
      publishTime: '2024-03-18'
    }
  ]

  return (
    <List
      itemLayout="vertical"
      dataSource={newBooks}
      renderItem={book => (
        <List.Item
          key={book.id}
          className={styles.listItem}
          extra={
            <div className={styles.timeWrapper}>
              <ClockCircleOutlined />
              <span>{book.publishTime}</span>
            </div>
          }
        >
          <List.Item.Meta
            title={<div className={styles.title}>{book.title}</div>}
            description={
              <div className={styles.description}>
                <Tag color="purple">{book.author}</Tag>
                <Rate disabled defaultValue={book.rating} />
              </div>
            }
          />
          <div className={styles.content}>{book.description}</div>
        </List.Item>
      )}
    />
  )
}

export default Booknew
