import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { ReactElement } from 'react';

interface NavItem {
  name: string;
  path: string;
}

interface SocialItem {
  name: ReactElement;
  path: string;
}

const Footer = () => {
  const nav: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'ABOUT US', path: '/aboutus' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'ONLINE GIVING', path: '/online' },
    { name: 'WATCH US', path: '/watch' },
  ];

  const social: SocialItem[] = [
    { name: <FaFacebookF />, path: '/' },
    { name: <IoLogoInstagram />, path: '/' },
  ];

  return (
    <div className="bg-gray-200">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4  px-4 md:px-20 py-10">
          <div className="md:col-span-4 mb-20 md:mb-0">
            <h1 className="font-bold text-2xl">RCCG House of Prayer</h1>
          </div>
          <div className="md:col-span-2 mb-10 md:mb-0">
            <h1 className="font-bold mb-10">Visit us Today</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sint suscipit nobis labore et quasi earum delectus, expedita quae
              aliquam!
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col">
            <h1 className="font-bold mb-10">Links</h1>
            {nav.map((item, index) => (
              <div key={index}>
                <Link to={item.path}>{item.name}</Link>
              </div>
            ))}
          </div>
          <div className="md:col-span-4">
            <h1 className="font-bold mb-10">Stay Updated - Follow Us</h1>
            <div className="flex flex-row gap-5 mb-10">
              {social.map((item, index) => (
                <div key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-20 text-gray-500 mx-3" />
        <p className="text-center text-sm mt-2 text-gray-500 pb-5">
          itae nemo quisquam ad illo quo sunt. Delectus.
        </p>
      </div>
    </div>
  );
};

export default Footer;
