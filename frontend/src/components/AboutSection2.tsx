import img6 from '../assets/img6.jpg';

const AboutSection2 = () => {
  return (
    <div className="mt-20   rounded-xl p-6 md:p-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-4">
          <h4 className="text-3xl md:text-4xl font-bold text-yellow-400">
            OUR MISSION
          </h4>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto
            illum.
          </p>
          <p className="">
            We are committed to building sustainable growth through tech and
            innovation.
          </p>
          <p className="">
            Our platform ensures transparency, trust, and long-term value for
            all stakeholders.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={img6}
            alt="About us"
            className="w-full h-full object-cover max-h-[400px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
