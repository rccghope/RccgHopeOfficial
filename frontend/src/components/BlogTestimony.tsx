import img6 from '../assets/img6.jpg';
import { useThemeStore } from '../store/themeStore';
import type { ThemeState } from '../store/themeStore';
import React from 'react';

const BlogTestimony: React.FC = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);

  return (
    <section
      className={`px-6 py-12 transition-colors duration-500 ${
        mode === 'dark' ? 'bg-[#1D1E4F]' : 'bg-[#1D1E4F]'
      } `}
    >
      <div className={`max-w-6xl mx-auto text-center mb-12 `}>
        <h2
          className={`text-3xl font-bold ${
            mode === 'light' ? 'text-white' : 'text-white'
          } `}
        >
          Testimonies
        </h2>
        <p
          className={`text-gray-600  mt-4  ${
            mode === 'light' ? 'text-white' : 'text-white'
          }`}
        >
          Hear what the Lord is doing in the lives of His people.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col transition-colors duration-500"
          >
            <img
              src={img6}
              alt="Testimony"
              className="w-full h-60 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, fugiat.
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                - Anonymous
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogTestimony;
