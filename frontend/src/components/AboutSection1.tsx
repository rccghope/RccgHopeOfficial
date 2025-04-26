import { useThemeStore } from '../store/themeStore'; // Make sure the path is correct

const AboutSection1 = () => {
  const { mode } = useThemeStore((state) => state); // Retrieve the current theme mode

  return (
    <div>
      <div
        className={`flex justify-center items-center text-bold mt-7 w-auto ${
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
