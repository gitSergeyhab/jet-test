import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SecondaryMarket } from './pages/secondary-market/secondary-market';
import { Main } from './pages/main/main';

export const AppRoute = {
  SecondaryMarket: 'second',
  Main: '/'
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.SecondaryMarket} element={<SecondaryMarket />} />

      </Routes>
    </BrowserRouter>
  )
}
