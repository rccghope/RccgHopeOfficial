import { useThemeStore } from '../store/themeStore'; // Ensure the path is correct

const HomeDifferenceText = () => {
  const { mode } = useThemeStore((state) => state); // Retrieve the current theme mode from the store

  return (
    <div className={`mt-30 text-center ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
      <h1 className="font-bold text-4xl">
        How You Can Make a Difference
      </h1>
    </div>
  );
};

export default HomeDifferenceText;
