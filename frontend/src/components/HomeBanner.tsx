const HomeBanner = () => {
  return (
    <div className="w-full h-[700px] bg-[#1D1E4F] flex items-center justify-center">
      <div className="text-center text-white max-w-xl px-4">
        <h1 className="text-5xl font-bold mb-12">Share your Testimony</h1>
        <p className="mb-2">
          Tell us how God has moved in your life through our church.
        </p>
        <p className="mb-6">Your story could inspire someone.</p>
        <a
          href="#"
          className="bg-[#59D478] text-black font-semibold py-3 px-6 rounded hover:bg-[#45c368] transition duration-300"
        >
          Share Testimony
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;
