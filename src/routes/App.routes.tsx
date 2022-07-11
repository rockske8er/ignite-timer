import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { History } from '../pages/History'
import { Home } from '../pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/history'} element={<History />} />
      </Route>
    </Routes>
  )
}

export { AppRoutes }
