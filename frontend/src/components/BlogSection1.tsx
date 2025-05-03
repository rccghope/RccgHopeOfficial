import { useThemeStore } from '../store/themeStore';
import type { ThemeState } from '../store/themeStore';
import React from 'react';

const BlogSection1: React.FC = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);

  return (
    <section
      className={`px-6 py-12 transition-colors duration-500 ${
        mode === 'light' ? '' : 'bg-gray-900'
      } `}
    >
      <div
        className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center `}
      >
        {/* Text Section */}
        <div
          className={` ${mode === 'light' ? 'bg-[#A3B7DC]' : 'bg-gray-900'} p-8`}
        >
          <h2
            className={`text-3xl font-bold mb-6  ${
              mode === 'light' ? 'text-' : 'text-white'
            }`}
          >
            Message from the Pastor
          </h2>
          <div
            className={`space-y-5  leading-relaxed ${
              mode === 'light' ? 'text-' : 'text-white'
            }`}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quas vel, mollitia ipsam cupiditate eligendi deserunt incidunt
              blanditiis, eos provident, consectetur ipsum voluptatem adipisci a
              eum illo ab harum error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quas vel, mollitia ipsam cupiditate eligendi deserunt incidunt
              blanditiis, eos provident, consectetur ipsum voluptatem adipisci a
              eum illo ab harum error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quas vel, mollitia ipsam cupiditate eligendi deserunt incidunt
              blanditiis, eos provident, consectetur ipsum voluptatem adipisci a
              eum illo ab harum error!
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-full">
          <img
            src="https://via.placeholder.com/500"
            alt="Pastor's Message"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection1;
