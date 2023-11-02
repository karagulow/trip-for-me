import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import './assets/scss/main.scss';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { Tours } from './pages/Tours';
import { TourPage } from './pages/TourPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="collections" element={<Collections />} />
        <Route path="tours/">
          <Route index element={<Tours />} />
          <Route path="id" element={<TourPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
