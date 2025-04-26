import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useThemeStore } from '../store/themeStore';

const RootLayout = () => {
  const mode = useThemeStore((state) => state.mode);

  return (
    <div className={`${mode === 'light' ? 'bg-white' : 'bg-black'}`}>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
