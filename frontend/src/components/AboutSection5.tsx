import React from 'react';
import { useThemeStore } from '../store/themeStore'; // Assuming a theme store is used
import img6 from '../assets/img6.jpg';

interface ImageItem {
  id: number;
  src: string;
}

const images: ImageItem[] = [
  { id: 1, src: img6 },
  { id: 2, src: img6 },
  { id: 3, src: img6 },
  { id: 4, src: img6 },
  { id: 5, src: img6 },
  { id: 6, src: img6 },
];

const AboutSection5: React.FC = () => {
  const { mode } = useThemeStore((state) => state); // Assuming you have a theme store that tracks dark/light mode

  return (
    <div
      className={`mt-40 p-2 ${
        mode === 'dark' ? 'text-white' : 'bg-white text-gray-800'
      }`} // Conditional background and text colors
    >
      <h2
        className={`text-5xl font-bold text-center mb-6 ${
          mode === 'dark' ? 'text-yellow-400' : 'text-yellow-500'
        }`} // Conditional text color for the title
      >
        Meet our Leaders
      </h2>
      <p
        className={`text-center font-semibold mb-10 ${
          mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`} // Conditional text color for the subtitle
      >
        Our Pastors and team are committed to serving you and our community
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left tall image */}
        <div className="md:col-span-3">
          <img
            src={img6}
            alt="Main leadership"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right grid of 6 images */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <div key={img.id}>
                <img
                  src={img.src}
                  alt={`Leader ${img.id}`}
                  className="w-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection5;
