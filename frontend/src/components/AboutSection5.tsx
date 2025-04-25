import React from 'react';
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
  return (
    <div className="mt-40">
      <h2 className="text-5xl font-bold text-center mb-6">
        Meet our Leaders
      </h2>
      <p className="text-center font-semibold mb-10">
        Our Pastors and team are committed to serving you and our community
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left tall image */}
        <div className="md:col-span-3">
          <img
            src={img6}
            alt="Main leadership"
            className="w-full h-full object-cover rounded-lg"
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
                  className="w-full object-cover rounded-lg"
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
