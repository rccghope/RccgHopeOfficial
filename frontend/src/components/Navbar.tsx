import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useThemeStore } from '../store/themeStore';
import sun from '../assets/sun.png';
import moon from '../assets/night.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { mode, toggleMode } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div
        className={`fixed top-0 right-0 left-0 z-10 transition-all duration-300 ${
          isScrolled
            ? mode === 'light'
              ? 'bg-white'
              : 'bg-gray-900'
            : 'bg-transparent'
        }`}
      >
        <div className="flex flex-row justify-between px-4 md:px-15 py-2 md:py-5">
          <div className="mt-5">
            <Link to="/">
              <img src="" alt="logo" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="flex-row gap-8 mt-10 font-bold hidden md:flex">
            {['/', '/aboutus', '/contact', '/online', '/watch'].map(
              (path, i) => (
                <NavLink
                  key={i}
                  to={path}
                  className={`${
                    mode === 'light' ? 'text-black' : 'text-white'
                  }`}
                >
                  {
                    [
                      'HOME',
                      'ABOUT US',
                      'CONTACT US',
                      'ONLINE GIVING',
                      'WATCH LIVE',
                    ][i]
                  }
                </NavLink>
              ),
            )}
            <button
              onClick={toggleMode}
              className={`p-2 mb-4 rounded-full ${
                mode === 'light' ? 'bg-black' : 'bg-white'
              }`}
            >
              <img
                src={mode === 'light' ? sun : moon}
                alt="theme-toggle-icon"
                className="w-4 h-4"
              />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div
            className={`md:hidden mt-5 text-3xl cursor-pointer ${
              mode === 'light' ? 'text-black' : 'text-white'
            }`}
            onClick={toggleMenu}
          >
            <FaBars />
          </div>
        </div>
        <button
          onClick={toggleMode}
          className={`mt-10 md:hidden fixed bottom-10 right-5 p-2 rounded-full ${
            mode === 'light' ? 'bg-black' : 'bg-white'
          }`}
        >
          <img
            src={mode === 'light' ? sun : moon}
            alt="theme-toggle-icon"
            className="w-4 h-4"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-30 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute w-full h-full bg-black opacity-50"
          onClick={toggleMenu}
        ></div>

        {/* Sidebar */}
        <div
          className={`relative z-40 w-[70%] h-full ${
            mode === 'light' ? 'bg-white' : 'bg-gray-900'
          } p-6 flex flex-col`}
        >
          <div className="flex justify-between items-center mb-8">
            <h2
              className={`text-xl font-bold ${
                mode === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              RCCG House of Prayer
            </h2>
            <button onClick={toggleMenu} className="text-2xl">
              <IoClose
                className={`${mode === 'light' ? 'text-black' : 'text-white'}`}
              />
            </button>
          </div>

          {['/', '/aboutus', '/contact', '/online', '/watch'].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={`mb-4 text-lg font-semibold  ${
                mode === 'light' ? 'text-black' : 'text-white'
              }`}
              onClick={toggleMenu}
            >
              {
                [
                  'HOME',
                  'ABOUT US',
                  'CONTACT US',
                  'ONLINE GIVING',
                  'WATCH LIVE',
                ][i]
              }
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
