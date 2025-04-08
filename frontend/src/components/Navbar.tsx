import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className="flex flex-row justify-between px-4 md:px-15 py-5">
        <div className="mt-10">
          <Link to="/">
            {' '}
            <img src="" alt="logo" />
          </Link>
        </div>
        <div className="flex-row gap-8 mt-10 font-bold hidden md:flex">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="aboutus">ABOUT US</NavLink>
          <NavLink to="contact">CONTACT US</NavLink>
          <NavLink to="Online">ONLINE GIVING</NavLink>
          <NavLink to="watch">WATCH LIVE</NavLink>
        </div>
        <div className="md:hidden mt-10 text-3xl text-black cursor-pointer">
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
