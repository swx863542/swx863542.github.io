import React, { useState } from 'react'
import { List, Checkbox, Tag, Input, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { PlusOutlined } from '@ant-design/icons'
import styles from './styles.module.css'

interface TodoItem {
  id: number
  title: string
  completed: boolean
  time: string
}

const TodoList: React.FC = () => {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: 1,
      title: '完成《九劫问道》第二章',
      completed: false,
      time: '今天 14:00'
    },
    {
      id: 2,
      title: '复习《绝世武魂》精彩章节',
      completed: true,
      time: '已完成'
    },
    {
      id: 3,
      title: '阅读新书《赤月吟星》',
      completed: false,
      time: '明天 10:00'
    }
  ])

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: inputValue,
          completed: false,
          time: '待完成'
        }
      ])
      setInputValue('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, time: todo.completed ? '待完成' : '已完成' }
          : todo
      )
    )
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>阅读待办</h3>
      <div className={styles.inputWrapper}>
        <Input
          placeholder="添加待办阅读"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onPressEnter={addTodo}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={addTodo}>
          添加
        </Button>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={item => (
          <List.Item className={styles.listItem}>
            <Checkbox 
              checked={item.completed} 
              onChange={() => toggleTodo(item.id)}
              className={styles.checkbox}
            >
              <div className={styles.content}>
                <div className={styles.text}>{item.title}</div>
                <Tag color={item.completed ? 'success' : 'processing'}>
                  {item.time}
                </Tag>
              </div>
            </Checkbox>
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoList
