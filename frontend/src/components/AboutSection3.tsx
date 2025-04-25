import img6 from '../assets/img6.jpg';

const AboutSection3 = () => {
  return (
    <div className="mt-20  rounded-xl p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={img6}
            alt="Team working toward a shared vision"
            className="w-full h-full object-cover rounded-xl max-h-[400px] shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-4">
          <h4 className="text-3xl md:text-4xl font-bold text-yellow-400">
            OUR VISION
          </h4>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto
            illum.
          </p>
          <p className="">
            Explicabo alias natus magnam mollitia, rerum beatae in.
          </p>
          <p className="">
            Facilis quae exercitationem dolorem adipisci officiis numquam
            explicabo. Necessitatibus recusandae dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
