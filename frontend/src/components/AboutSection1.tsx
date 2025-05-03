import { useThemeStore } from '../store/themeStore'; 


interface ThemeState {
  mode: 'light' | 'dark'; // Type mode to be either 'light' or 'dark'
}

const AboutSection1: React.FC = () => {

  const { mode } = useThemeStore((state: ThemeState) => state); // Retrieve the current theme mode with the correct type

  return (
    <div>
      <div
        className={`flex justify-center items-center text-bold mt-7 w-auto px-4 md:px-20 ${
          mode === 'dark' ? 'text-white' : 'text-black'
        }`}
      >
        <h5
          className={`font-bold text-center ${
            mode === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          voluptatum autem at quae officia dicta maxime adipisci repellat,
          architecto soluta? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Architecto voluptatem soluta ullam excepturi et sapiente.
        </h5>
      </div>
    </div>
  );
};

export default AboutSection1;
