import { useThemeStore } from '../store/themeStore'; 

const Discover = () => {
  const mode = useThemeStore((state) => state.mode);

  return (
    <div
      className={`${mode === 'light' ? 'bg-gray-500' : 'bg-blue-500'} w-full h-full grid grid-cols-1 md:grid-cols-12 gap-6 px-6 py-8 md:px-20 md:py-10 text-white`}
    >
      {/* Left side */}
      <div className="flex flex-col justify-center items-center md:items-start md:col-span-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Discover How, Where, and When We Worship.
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold">
          We Look Forward to Seeing You Soon
        </h2>
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-center items-center md:col-span-4">
        <button className="md:py-4 mt-6 md:mt-0 md:px-8 py-2 px-4 border-2 text-white border-white rounded-md hover:bg-white hover:text-gray-600 transition duration-300">
          Join us
        </button>
      </div>
    </div>
  );
};

export default Discover;
