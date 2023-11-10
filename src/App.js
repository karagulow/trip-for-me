import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import './assets/scss/main.scss';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { Tours } from './pages/Tours';
import { TourPage } from './pages/TourPage';
import { OrderRegister } from './pages/OrderRegister';
import { TouristProfile } from './pages/TouristProfile';
import { TouristChat } from './pages/TouristChat';
import { TouristReviews } from './pages/TouristReviews';
import { TouristSupport } from './pages/TouristSupport';
import { GuideProfile } from './pages/GuideProfile';
import { GuideChat } from './pages/GuideChat';
import { GuideReviews } from './pages/GuideReviews';
import { GuideAnalytics } from './pages/GuideAnalytics';

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
        <Route path="order" element={<OrderRegister />} />
        <Route path="lk/tourist/id" element={<TouristProfile />} />
        <Route path="lk/tourist/chat" element={<TouristChat />} />
        <Route path="lk/tourist/reviews" element={<TouristReviews />} />
        <Route path="lk/tourist/support" element={<TouristSupport />} />
        <Route path="lk/guide/id" element={<GuideProfile />} />
        <Route path="lk/guide/chat" element={<GuideChat />} />
        <Route path="lk/guide/reviews" element={<GuideReviews />} />
        <Route path="lk/guide/support" element={<GuideChat />} />
        <Route path="lk/guide/analytics" element={<GuideAnalytics />} />
      </Route>
    </Routes>
  );
}

export default App;
