import React from 'react';
import { useThemeStore } from '../store/themeStore'; // Assuming a theme store is used
import img33 from '../assets/img33.jpg';
import type { ThemeState } from '../store/themeStore';

const AboutSection6: React.FC = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);
 

  
  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const titleColor = mode === 'dark' ? 'text-yellow-400' : 'text-yellow-500';

  return (
    <div className={`mt-20 p-2 px-4 md:px-20 ${mode === 'dark' ? ' text-white' : 'bg-white text-gray-800'}`}>
      <h1 className={`text-5xl font-bold text-center mb-10 ${titleColor}`}>
        Our Story
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tall image by the left */}
        <div>
          <img
            src={img33}
            alt="Our Story"
            className="w-full h-[30rem] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text by the right */}
        <div>
          <h4 className={`font-bold text-2xl mb-4 ${titleColor}`}>
            A brief history of the church.
          </h4>

          <p className={`mt-2 ${textColor}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            necessitatibus dolore unde nulla perferendis accusamus architecto,
            tenetur alias odit at sunt temporibus aut doloribus, consectetur
            dolorum? Fugiat deserunt, harum itaque natus tenetur quidem
            accusantium odit aliquid eveniet voluptatum dolor recusandae?
            Commodi, exercitationem. Aspernatur repudiandae corporis distinctio,
            vel est asperiores soluta repellat praesentium molestias tempore,
          </p>
          <p className={`mt-2 ${textColor}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            dolorem aperiam animi quasi rem non officiis explicabo facilis
            delectus adipisci?
          </p>
          <p className={`mt-2 ${textColor}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            distinctio. Facere accusamus velit ratione quo magni minima, harum
            aliquam esse ut fuga dolor veritatis obcaecati et, qui vero odio
            quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection6;
