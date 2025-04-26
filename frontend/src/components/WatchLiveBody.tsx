import { useThemeStore } from '../store/themeStore'; 
import type { ThemeState } from '../store/themeStore'; 

const WatchLiveBody = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);


  return (
    <div
      className={`${
        mode === 'light' ? '' : 'bg-gray-900'
      } transition duration-300`} 
    >
      <div
        className={`flex flex-row justify-center items-center px-2 gap-2 mt-5 md:mt-20 md:pb-20 ${
          mode === 'light' ? 'text-black' : 'text-white'
        }`} 
      >
        <div
          className={`py-4 px-8 font-bold text-[15px] ${
            mode === 'light' ? 'bg-gray-300' : 'bg-gray-700'
          } rounded-md shadow-md`}
        >
          <a
            href="https://youtube.com/@rccghoplagos?si=eyj3udjJlSJxNVEW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1
              className={`${mode === 'light' ? 'text-black' : 'text-white'}`}
            >
              Watch on YouTube
            </h1>
          </a>
        </div>
        <div
          className={`py-4 px-8 font-bold text-[15px] ${
            mode === 'light' ? 'bg-gray-300' : 'bg-gray-700'
          } rounded-md shadow-md`}
        >
          <a
            href="https://rccghoplagos.mixlr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1
              className={`${mode === 'light' ? 'text-black' : 'text-white'}`}
            >
              Listen via Mixlr
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WatchLiveBody;
