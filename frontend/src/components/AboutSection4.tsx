import React from 'react';
import img6 from '../assets/img6.jpg';

const AboutSection4: React.FC = () => {
  return (
    <div
      className="mt-20 bg-cover bg-center bg-no-repeat h-auto py-20 px-4 md:px-0 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${img6})`,
      }}
    >
      <div className="max-w-4xl mx-auto rounded-xl p-8 md:p-12 text-center shadow-xl">
        <h4 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">OUR BELIEF</h4>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias
          dolore veritatis nihil nemo eaque obcaecati similique rem id facere culpa
          modi aliquid neque incidunt, accusantium ea magnam deserunt dolores.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione neque
          maiores accusamus nostrum, distinctio nisi quas dolores maxime iste dolor
          ipsa fuga suscipit, autem quo eius deleniti et! Recusandae voluptates
          exercitationem quas corporis, magnam voluptatum aperiam corrupti non
          molestiae ipsa.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam
          dolorum, nihil itaque asperiores cum dolorem quasi rem id temporibus?
        </p>
      </div>
    </div>
  );
};

export default AboutSection4;
