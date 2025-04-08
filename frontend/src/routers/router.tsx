import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../Layout/RootLayout';
import HomePage from '../Pages/HomePage';
import ContactUs from '../Pages/ContactUs';
import AboutUs from '../Pages/AboutUs';
import OnlineGiving from '../Pages/OnlineGiving';
import WatchLive from '../Pages/WatchLive';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'aboutus', element: <AboutUs /> },
      { path: 'Online', element: <OnlineGiving /> },
      { path: 'watch', element: <WatchLive /> },
    ],
  },
]);

export default router;
