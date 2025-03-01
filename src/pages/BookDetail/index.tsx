import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Card, Typography, Tag, Space, Rate, Divider } from 'antd'
import { useTranslation } from 'react-i18next'
import { BookOutlined } from '@ant-design/icons'
import styles from './styles.module.css'

const { Title, Paragraph } = Typography

interface BookDetail {
  id: number
  title: string
  author: string
  category: string
  description: string
  cover?: string  // 添加可选的 cover 属性
  rating: number
  country: string
  content: string
  publishDate: string
  pages: number
  wordCount: number
  tags: string[]
}

const BookDetail: React.FC = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const book = location.state as BookDetail  // 获取传递的书籍数据

  if (!book) {
    return <div>Book not found</div>  // 添加错误处理
  }

  return (
    <div className={styles.container}>
      <Card className={styles.bookInfo}>
        <div className={styles.header}>
          <div className={styles.cover}>
            {book.cover ? (
              <img src={book.cover} alt={book.title} />
            ) : (
              <div className={styles.placeholder}>
                <BookOutlined style={{ fontSize: 48, color: '#999' }} />
              </div>
            )}
          </div>
          <div className={styles.info}>
            <Title level={2}>{book.title}</Title>
            <Paragraph>
              <Space direction="vertical" size="middle">
                <div>{t('books.author')}: {book.author}</div>
                <div>
                  <Rate disabled defaultValue={book.rating} />
                  <span className={styles.rating}>{book.rating}</span>
                </div>
                <div>
                  <Space wrap>
                    <Tag color="blue">{t(`booklist.${book.category}`)}</Tag>
                    <Tag color="green">{t(`booklist.country_${book.country.toLowerCase()}`)}</Tag>
                    {book.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Space>
                </div>
                <div className={styles.stats}>
                  <span>{t('books.publish_date')}: {book.publishDate}</span>
                  <span>{t('books.pages')}: {book.pages}</span>
                  <span>{t('books.word_count')}: {book.wordCount}</span>
                </div>
              </Space>
            </Paragraph>
            <Paragraph>{book.description}</Paragraph>
          </div>
        </div>
        <Divider />
        <div className={styles.content}>
          <Title level={3}>{t('books.content')}</Title>
          <Paragraph>{book.content}</Paragraph>
        </div>
      </Card>
    </div>
  )
}

export default BookDetail 