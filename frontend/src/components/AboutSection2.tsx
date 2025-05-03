import { useThemeStore } from '../store/themeStore'; // Import the theme store

import type { ThemeState } from '../store/themeStore';
import img32 from '../assets/img32.jpg';

const AboutSection2 = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);

  return (
    <div
      className={`mt-20 rounded-xl p-6 md:p-10 px-4 md:px-20 ${
        mode === 'dark' ? '' : 'bg-white'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-4">
          <h4
            className={`text-3xl md:text-4xl font-bold ${
              mode === 'dark' ? 'text-yellow-400' : 'text-yellow-500'
            }`}
          >
            OUR MISSION
          </h4>
          <p
            className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto
            illum.
          </p>
          <p
            className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            We are committed to building sustainable growth through tech and
            innovation.
          </p>
          <p
            className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Our platform ensures transparency, trust, and long-term value for
            all stakeholders.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={img32}
            alt="About us"
            className="w-full h-full object-cover max-h-[400px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
