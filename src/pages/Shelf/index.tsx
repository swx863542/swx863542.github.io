import React from 'react'
import { Card, Row, Col, Tag, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { BookOutlined, ReadOutlined } from '@ant-design/icons'

interface BookType {
  id: number
  title: string
  author: string
  category: string
  progress: number
  cover?: string
}

const Shelf: React.FC = () => {
  const { t } = useTranslation()

  const books: BookType[] = [
    {
      id: 1,
      title: '三体',
      author: '刘慈欣',
      category: '科幻',
      progress: 35,
    },
    {
      id: 2,
      title: '活着',
      author: '余华',
      category: '文学',
      progress: 0,
    },
    {
      id: 3,
      title: '百年孤独',
      author: '加西亚·马尔克斯',
      category: '魔幻现实主义',
      progress: 100,
    },
  ]

  return (
    <div>
      <Row gutter={[16, 16]}>
        {books.map((book) => (
          <Col xs={24} sm={12} md={8} lg={6} key={book.id}>
            <Card
              hoverable
              cover={
                book.cover ? (
                  <img alt={book.title} src={book.cover} />
                ) : (
                  <div
                    style={{
                      height: 200,
                      background: '#f5f5f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BookOutlined style={{ fontSize: 48, color: '#999' }} />
                  </div>
                )
              }
              actions={[
                <Button type="link" icon={<ReadOutlined />}>
                  {t('shelf.continue_reading')}
                </Button>,
              ]}
            >
              <Card.Meta
                title={book.title}
                description={
                  <>
                    <div>{book.author}</div>
                    <div style={{ marginTop: 8 }}>
                      <Tag color="blue">{book.category}</Tag>
                      <Tag color={book.progress === 100 ? 'green' : 'orange'}>
                        {book.progress}%
                      </Tag>
                    </div>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Shelf 