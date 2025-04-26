import React from 'react';
import { useThemeStore } from '../store/themeStore'; // Assuming a theme store is used
import img6 from '../assets/img6.jpg';

const AboutSection6: React.FC = () => {
  const { mode } = useThemeStore((state) => state); // Assuming you have a theme store that tracks dark/light mode

  return (
    <div
      className={`mt-20 p-2 ${
        mode === 'dark' ? ' text-white' : 'bg-white text-gray-800'
      }`} // Conditional background and text colors
    >
      <h1
        className={`text-5xl font-bold text-center mb-10 ${
          mode === 'dark' ? 'text-yellow-400' : 'text-yellow-500'
        }`} // Conditional text color for the title
      >
        Our Story
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tall image by the left */}
        <div>
          <img
            src={img6}
            alt="Our Story"
            className="w-full h-[30rem] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text by the right */}
        <div>
          <h4
            className={`font-bold text-2xl mb-4 ${
              mode === 'dark' ? 'text-yellow-400' : 'text-yellow-500'
            }`} // Conditional text color for the subtitle
          >
            A brief history of the church.
          </h4>

          <p
            className={`mt-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`} // Conditional text color for the paragraph in dark and light mode
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            necessitatibus dolore unde nulla perferendis accusamus architecto,
            tenetur alias odit at sunt temporibus aut doloribus, consectetur
            dolorum? Fugiat deserunt, harum itaque natus tenetur quidem
            accusantium odit aliquid eveniet voluptatum dolor recusandae?
            Commodi, exercitationem. Aspernatur repudiandae corporis distinctio,
            vel est asperiores soluta repellat praesentium molestias tempore,
          </p>
          <p
            className={`mt-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`} // Conditional text color for the second paragraph
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            dolorem aperiam animi quasi rem non officiis explicabo facilis
            delectus adipisci?
          </p>
          <p
            className={`mt-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`} // Conditional text color for the third paragraph
          >
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
