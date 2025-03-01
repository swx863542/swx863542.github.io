import React from 'react'
import { Carousel, Card ,Badge,Rate} from 'antd'
import { useTranslation } from 'react-i18next'
import { ReadOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

interface Book {
  id: number
  title: string
  author: string
  cover?: string
  description: string
  rating: number
}

const BookCarousel: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const recommendedBooks: Book[] = [
    {
      id: 1,
      title: '三体',
      author: '刘慈欣',
      rating: 4.8,
      description: '地球文明向宇宙发出的第一声啼鸣，以及它的回应...',
    },
    {
      id: 2,
      title: '活着',
      author: '余华',
      rating: 4.8,
      description: '生命的意义在于承受，活着的意义在于活着本身...',
    },
    {
      id: 3,
      title: '百年孤独',
      author: '加西亚·马尔克斯',
      rating: 4.8,
      description: '一个家族七代人的故事，一个世纪的拉美史诗...',
    },
  ]

  return (
    <Carousel arrows  autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
      {recommendedBooks.map((book) => (
        <div key={book.id}>
          <Card
            hoverable
            style={{ margin: '10px' }}
            onClick={() => navigate(`/books/${book.id}`)}
            cover={
              book.cover ? (
                <img
                  alt={book.title}
                  src={book.cover}
                  style={{ height: 300, objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    height: 300,
                    background: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ReadOutlined style={{ fontSize: 48, color: '#999' }} />
                </div>
              )
            }
          >
            <Card.Meta
              title={`${book.title} - ${book.author}`}
              description={
                <>
                <div>{book.description}</div>
                <Rate disabled defaultValue={book.rating} />
                </>
              }
            />
          </Card>
        </div>
      ))}
    </Carousel>
  )
}

export default BookCarousel 