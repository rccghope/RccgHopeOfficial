import { useThemeStore } from '../store/themeStore'; 
import type { ThemeState } from '../store/themeStore'; 

const HomeDifferenceText = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);


  return (
    <div className={`mt-30 text-center ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
      <h1 className="font-bold text-4xl">
        How You Can Make a Difference
      </h1>
    </div>
  );
};

export default HomeDifferenceText;
