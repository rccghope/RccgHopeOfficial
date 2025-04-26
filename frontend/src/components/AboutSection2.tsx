import { useThemeStore } from '../store/themeStore'; // Import the theme store
import img6 from '../assets/img6.jpg';

// Define the state type for theme store
interface ThemeState {
  mode: 'light' | 'dark';
}

const AboutSection2 = () => {
  const { mode } = useThemeStore<ThemeState>((state) => state); // Get the current mode from the theme store with type

  return (
    <div
      className={`mt-20 rounded-xl p-6 md:p-10 ${mode === 'dark' ? '' : 'bg-white'}`} // Conditional background color
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-4">
          <h4
            className={`text-3xl md:text-4xl font-bold ${mode === 'dark' ? 'text-yellow-400' : 'text-yellow-500'}`} // Conditional text color for the title
          >
            OUR MISSION
          </h4>
          <p
            className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} // Conditional text color for the paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto
            illum.
          </p>
          <p
            className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            We are committed to building sustainable growth through tech and
            innovation.
          </p>
          <p
            className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Our platform ensures transparency, trust, and long-term value for
            all stakeholders.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={img6}
            alt="About us"
            className="w-full h-full object-cover max-h-[400px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
