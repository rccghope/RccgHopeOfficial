import { useThemeStore } from '../store/themeStore'; // Assuming the store is set up
import type { ThemeState } from '../store/themeStore';
import React from 'react';

const BlogFace: React.FC = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);

  return (
    <section
      className={`px-6 py-12 transition-colors duration-500 ${
        mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      } `}
    >
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className={`text-3xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Face of the Week
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400"
            alt="Face of the Week"
            className="w-80 h-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Info Section */}
        <div className="space-y-5 text-left">
          <div className={`p-4 rounded-lg shadow-sm ${mode === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
            <p className={`text-gray-700 ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              <strong>Name:</strong> John Doe
            </p>
          </div>
          <div className={`p-4 rounded-lg shadow-sm ${mode === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
            <p className={`text-gray-700 ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              <strong>Gender:</strong> Male
            </p>
          </div>
          <div className={`p-4 rounded-lg shadow-sm ${mode === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
            <p className={`text-gray-700 ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              <strong>Unit in Church:</strong> Choir
            </p>
          </div>
          <div className={`p-4 rounded-lg shadow-sm ${mode === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
            <p className={`text-gray-700 ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              <strong>Favorite Bible Verse:</strong> John 3:16
            </p>
          </div>
          <div className={`p-4 rounded-lg shadow-sm ${mode === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
            <p className={`text-gray-700 ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              <strong>Bible Quote:</strong> "For God so loved the world..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFace;
