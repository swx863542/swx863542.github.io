import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Books from '../pages/Books'
import BookDetail from '../pages/BookDetail'
import Shelf from '../pages/Shelf'
import Mine from '../pages/Mine'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'books',
        children: [
          {
            path: '',
            element: <Books />
          },
          {
            path: ':id',
            element: <BookDetail />
          }
        ]
      },
      {
        path: 'shelf',
        element: <Shelf />
      },
      {
        path: 'mine',
        element: <Mine />
      }
    ]
  }
])

export default router 