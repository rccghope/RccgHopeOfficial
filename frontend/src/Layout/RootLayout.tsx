import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useThemeStore } from '../store/themeStore';

// Import the type
import type { ThemeState } from '../store/themeStore'; // <-- make sure to export ThemeState from the store
import ScrollToTop from '../components/ScrollToTop';

const RootLayout = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);

  return (
    <div className={`${mode === 'light' ? 'bg-white' : 'bg-black'}`}>
      <ScrollToTop />
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
    
    </div>
  );
};

export default RootLayout;
