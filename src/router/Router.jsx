import { createBrowserRouter } from 'react-router-dom'
import LottoPage from '../UI/pages/LottoPage'
import MainLayout from '../UI/layouts/MainLayout'
import RspPage from '../UI/pages/RspPage'
import BoardPage from '../UI/pages/BoardPage'
import BoardPagingPage from '../UI/pages/BoardPagingPage'

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
      {
        path: 'rsp',
        element: <RspPage />,
        loader: () => '가위바위보',
      },
      {
        path: 'boards',
        element: <BoardPage />,
        loader: () => '게시판',
      },
      {
        path: 'boardpaging',
        element: <BoardPagingPage />,
        loader: () => '게시판 페이지',
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export { router, routes }
