import img21 from '../assets/img21.jpg';

const AboutBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img21})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col w-full h-[30rem] justify-center items-center bg-black/60 text-white px-4 text-center">
        <h1 className="text-3xl md:text-6xl font-bold">Who We Are as a Church</h1>
        <p className="text-2xl mt-5">Rooted in Faith, Growing Together</p>
      </div>
    </div>
  );
};

export default AboutBanner;
