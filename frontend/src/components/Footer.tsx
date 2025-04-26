import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { ReactElement, FC } from 'react';
import { useThemeStore } from '../store/themeStore'; // 🌙 Theme store import

interface NavItem {
  name: string;
  path: string;
}

interface SocialItem {
  icon: ReactElement;
  path: string;
}

const Footer: FC = () => {
  const { mode } = useThemeStore((state) => state); // 🌓 Get current theme mode

  const navLinks: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'ABOUT US', path: '/aboutus' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'ONLINE GIVING', path: '/online' },
    { name: 'WATCH US', path: '/watch' },
  ];

  const socialLinks: SocialItem[] = [
    { icon: <FaFacebookF />, path: '/' },
    { icon: <IoLogoInstagram />, path: '/' },
  ];

  return (
    <footer className={`${mode === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'}`}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-20 py-10">
        {/* Branding */}
        <div className="md:col-span-4 mb-10 md:mb-0">
          <h1 className="font-bold text-2xl">RCCG House of Prayer</h1>
        </div>

        {/* Visit Info */}
        <div className="md:col-span-2 mb-10 md:mb-0">
          <h2 className="font-bold mb-4">Visit us Today</h2>
          <p className={`text-sm ${mode === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            sint suscipit nobis labore et quasi earum delectus, expedita quae
            aliquam!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-2 flex flex-col space-y-2">
          <h2 className="font-bold mb-4">Links</h2>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm hover:underline ${mode === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Media */}
        <div className="md:col-span-4">
          <h2 className="font-bold mb-4">Stay Updated - Follow Us</h2>
          <div className={`flex gap-5 text-xl ${mode === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            {socialLinks.map((item, index) => (
              <Link key={index} to={item.path} className="hover:text-blue-400">
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <hr className={`${mode === 'light' ? 'text-gray-300' : 'text-gray-500'} mx-4`} />
      <p className={`text-center text-sm py-4 ${mode === 'light' ? 'text-gray-500' : 'text-gray-300'}`}>
        &copy; {new Date().getFullYear()} RCCG House of Prayer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
