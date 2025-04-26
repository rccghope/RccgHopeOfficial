import { useThemeStore } from '../store/themeStore'; // Import the theme store
import img6 from '../assets/img6.jpg';

const AboutSection3 = () => {
  const { mode } = useThemeStore((state) => state); // Get the current mode from the theme store

  return (
    <div
      className={`mt-20 rounded-xl p-6 md:p-10 ${
        mode === 'dark' ? '' : 'bg-white'
      }`} // Conditional background color
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={img6}
            alt="Team working toward a shared vision"
            className="w-full h-full object-cover rounded-xl max-h-[400px] shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-4">
          <h4
            className={`text-3xl md:text-4xl font-bold ${
              mode === 'dark' ? 'text-yellow-400' : 'text-yellow-500'
            }`} // Conditional text color for the title
          >
            OUR VISION
          </h4>
          <p
            className={`${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`} // Conditional text color for the paragraphs
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto
            illum.
          </p>
          <p
            className={`${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Explicabo alias natus magnam mollitia, rerum beatae in.
          </p>
          <p
            className={`${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Facilis quae exercitationem dolorem adipisci officiis numquam
            explicabo. Necessitatibus recusandae dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
