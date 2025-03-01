import React from 'react'
import { Card, Row, Col, Progress, Badge, Button, Rate } from 'antd';
import { useTranslation } from 'react-i18next';
import { BookOutlined, ClockCircleOutlined, ReadOutlined, FireOutlined, RightOutlined } from '@ant-design/icons';
import TodoList from '../../components/TodoList';
import BookCarousel from '../../components/BookCarousel';
import BookList from '../../components/BookList';
import styles from './styles.module.css';
import StatisticCard from '../../components/StatisticCard'
import Booknew from '@/components/Booknew';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <BookList />
        </Col>
        <Col span={8}>
          <Badge.Ribbon text="HOT" color="#ff4d4f">
            <Card
              title={<h2>
                <FireOutlined className={styles.hotIcon} />
                {t('common.hot')}
              </h2>}
              className={styles.booksCard}
              extra={<Button type="link">
                {t('common.more')} <RightOutlined />
              </Button>}
            >
              <BookCarousel />
            </Card>
          </Badge.Ribbon>
        

          <Badge.Ribbon text="NEW" color="#ff4d4f">
            <Card
              title={<h2>
                <FireOutlined className={styles.hotIcon} />
                {t('common.new')}
              </h2>}
              className={styles.booksCard}
              extra={<Button type="link">
                  {t('common.more')} <RightOutlined />
              </Button>}
               style={{margin:'16px 0'}}
            >
                <Booknew />
            </Card>
          </Badge.Ribbon>


          <StatisticCard />

          <Card className={styles.todoCard}>
            <TodoList />
          </Card>
        </Col>
      </Row>

    </div>
  );
};

export default Home; 