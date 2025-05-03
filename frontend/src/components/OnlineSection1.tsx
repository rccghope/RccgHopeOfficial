import { useThemeStore } from '../store/themeStore';
import img6 from '../assets/img6.jpg';
import type { ThemeState } from '../store/themeStore';

const OnlineSection1 = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);

  return (
    <div
      className={`${
        mode === 'light' ? 'bg-[#1D1E4F]' : 'bg-[#1D1E4F]]'
      } transition duration-300`}
    >
      <div className="px-4 md:px-20">
        <div className="flex justify-center items-center border-t-2 ">
          <h1
            className={`text-4xl font-bold text-center py-10 mt-10 ${
              mode === 'light' ? 'text-white' : 'text-white'
            }`}
          >
            Why Your Giving Matters
          </h1>
        </div>

        {/* Left side */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="w-full flex flex-col">
            <p
              className={`border-t-2 border-b-2 md:border-r-2 py-15 px-2 ${
                mode === 'light' ? 'text-white' : 'text-white'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p
              className={`border-b-2 md:border-r-2 py-15 px-2 ${
                mode === 'light' ? 'text-white' : 'text-white'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p
              className={`border-b-2 md:border-r-2 py-15 px-2 ${
                mode === 'light' ? 'text-white' : 'text-white'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Middle side */}
          <div className="w-full md:h-14">
            <img
              src={img6}
              alt=""
              className="h-[24rem] object-cover w-full border-t-2 border-b-2"
            />
            <p
              className={`mt-2 px-2 ${
                mode === 'light' ? 'text-white' : 'text-white'
              }`}
            >
              Give, and it will be given to you: good measure, pressed down,
              shaken together, and running over will be put into your bosom. For
              with the same measure that you use, it will be measured back to
              you." - Luke 6:38
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full flex flex-col">
            <p
              className={`border-t-2 md:border-l-2 border-b-2 py-15 px-2 mt-5 md:mt-0 ${
                mode === 'light' ? 'text-white' : 'text-white'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p
              className={`border-b-2 md:border-l-2 py-15 px-2 ${
                mode === 'light' ? 'text-white' : 'text-white'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p
              className={`md:border-b-2 md:border-l-2 py-15 px-2 ${
                mode === 'light' ? 'text-white' : 'text-white'
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineSection1;
