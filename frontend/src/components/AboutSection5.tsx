import img6 from '../assets/img6.jpg';

interface Image {
  id: number;
  src: string;
}

const image: Image[] = [
  { id: 1, src: img6 },
  { id: 2, src: img6 },
  { id: 3, src: img6 },
  { id: 4, src: img6 },
  { id: 5, src: img6 },
  { id: 6, src: img6 },
];
const AboutSection5 = () => {
  return (
    <div className="mt-40">
      <div className="">
        {/* Leadership section */}
        <h2 className="text-5xl font-bold text-center mb-6">
          Meet our Leaders
        </h2>
        <p className="text-center font-semibold mb-10">
          Our Pastors and team are committed to serving you and our community
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left tall image */}
          <div className="md:col-span-3">
            <img
              src={img6}
              alt="Main leadership image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Right Grid of 6 Images */}
          {/*   lg:grid-cols-3 grid-cols-12  */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {image.map((img) => (
                <div key={img.id} className=''>
                  <img
                    src={img.src}
                    className="w-full h-80 object-cover rounded-lg"
                    alt={`Leadership ${img.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="px-4 md:px-20 w-screen p-20 mb-5 mx-auto max-w-7xl py-12 mt-40">

    //     {/* Leadership section */}
    //     <h2 className="text-3xl font-bold text-center mb-6">Meet our Leaders</h2>
    //     <p className="text-center mb-10">Our Pastors and team are committed to serving you and our community</p>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    //         {/* Left tall image */}
    //         <div className="md:w-1/4">
    //             <img src={img6} alt="Main leadership image" className="w-full h-full object-cover rounded-lg"/>
    //         </div>
    //         {/* Right Grid of 6 Images */}
    //         <div className="md:w-3/4 grid grid-cols-3 grid-rows-2 gap-4">
    //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
    //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
    //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
    //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
    //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
    //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
    //         </div>
    //     </div>

    // </div>
  );
};

export default AboutSection5;
