import React from 'react';
import { useThemeStore } from '../store/themeStore';
import type { ThemeState } from '../store/themeStore';

interface WeekDay {
  day: string;
  content: string;
}

const BlogWeekReview: React.FC = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);

  const weekDays: WeekDay[] = [
    {
      day: 'Sunday',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, debitis error.',
    },
    {
      day: 'Monday',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, debitis error.',
    },
    {
      day: 'Tuesday',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, debitis error.',
    },
    {
      day: 'Wednesday',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, debitis error.',
    },
    {
      day: 'Thursday',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, debitis error.',
    },
    {
      day: 'Friday',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, debitis error.',
    },
    {
      day: 'Saturday',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, debitis error.',
    },
  ];

  return (
    <section
      className={`px-6 py-12 transition-colors duration-500 ${
        mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2
          className={`text-3xl font-bold ${
            mode === 'dark' ? 'text-white' : 'text-gray-800'
          }`}
        >
          The Week in Review
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {weekDays.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-6 rounded-t-[100px]  shadow-md hover:shadow-lg transition-all duration-300 ${
              mode === 'dark'
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-600'
            }`}
          >
            <h3
              className={`text-xl font-semibold text-center ${
                mode === 'dark' ? 'text-blue-400' : 'text-blue-600'
              } mb-4`}
            >
              {item.day}
            </h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogWeekReview;
