import { createBrowserRouter } from 'react-router-dom'
import LottoPage from '../UI/pages/LottoPage'
import MainLayout from '../UI/layouts/MainLayout'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    loader: () => '로또',
    children: [
      {
        path: '/',
        element: <LottoPage />,
        loader: () => '로또',
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export { router, routes }
