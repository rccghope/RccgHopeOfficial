import img12 from '../assets/img12.jpg';

const HomeBanner2 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img12})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full px-4 h-[700px] bg-black/30 relative flex flex-col items-center justify-center text-white">
        <h1 className="md:text-5xl text-4xl font-bold">Get Involved With Our</h1>
        <h1 className="md:text-5xl text-4xl font-bold mt-5">Ongoing Project</h1>
        <p className="text-[25px] mt-10 text-center">
          Your support makes a difference — join us today!
        </p>
        <button className="py-4 px-8 border-2 border-white text-white mt-10 hover:bg-white hover:text-black transition duration-300">
          Donate now
        </button>
      </div>
    </div>
  );
};

export default HomeBanner2;
