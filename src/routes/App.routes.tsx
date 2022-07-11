import { Routes, Route } from 'react-router-dom'
import { History } from '../pages/History'
import { Home } from '../pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/history'} element={<History />} />
    </Routes>
  )
}

export { AppRoutes }
