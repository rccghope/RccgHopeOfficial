const Discover = () => {
  return (
    <div className="bg-gray-600 w-full h-full grid grid-cols-1 md:grid-cols-12 gap-4 px-10 py-10 md:px-20 text-white">
      {/* Left side */}
      <div className="flex flex-col justify-center items-center md:items-start md:col-span-8 text-center md:text-left ">
        <h1 className="text-2xl md:text-2xl font-bold">
          Discover How, Where, and When We Worship.
        </h1>
        <h1 className="text-2xl md:text-2xl font-bold">
          We Look Forward to Seeing You Soon
        </h1>
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-center items-center md:col-span-4">
        <button className="md:py-4 mt-10 md:mt-0 md:px-8 py-2 px-4 border-2 text-white border-white rounded-md hover:bg-white hover:text-gray-600 transition">
          Join us
        </button>
      </div>
    </div>
  );
};

export default Discover;
