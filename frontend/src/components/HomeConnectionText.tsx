import { useThemeStore } from '../store/themeStore';
import type { ThemeState } from '../store/themeStore'; 

const HomeConnectionText = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);

  return (
    <div
      className={`${
        mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      } py-10`}
    >
      <h1
        className={`text-center text-2xl md:text-4xl font-bold mt-20 ${
          mode === 'dark' ? 'text-white' : 'text-black'
        }`}
      >
        Build Connections, Foster Growth, Experience Thrive
      </h1>
      <p
        className={`text-center text-[19px] mt-5 ${
          mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}
      >
        Get connected with ministries that support spiritual growth and
        community
      </p>
    </div>
  );
};

export default HomeConnectionText;
