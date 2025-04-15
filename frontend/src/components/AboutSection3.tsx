import img6 from '../assets/img6.jpg';

const AboutSection3 = () => {
  return (
    <div className="mt-70 border-2 border-gray-300 rounded-xl p-4 md:p-10">
      {/* Stack vertically: text on top, image on bottom */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left h-[40rem] md:h-[20rem]">
        {/* Text section mobile */}
        <div className="block md:hidden space-y-4 w-full">
          <h4 className="font-bold text-3xl md:text-4xl">OUR VISION</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto
            illum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            alias natus magnam mollitia, rerum beatae in.
          </p>
          <p>
            Facilis quae exercitationem dolorem adipisci officiis numquam
            explicabo. Necessitatibus recusandae dolor.
          </p>
        </div>
        {/* Image section */}
        <div className="w-full">
          <img
            src={img6}
            alt="Team working toward a shared vision"
            className="md:absolute w-full md:w-1/2 md:max-h-[400px] object-cover rounded-xl top-12 "
          />
        </div>
        {/* Text section desktop */}
        <div className="hidden md:block space-y-4 w-full">
          <h4 className="font-bold text-3xl md:text-4xl">OUR VISION</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto
            illum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            alias natus magnam mollitia, rerum beatae in.
          </p>
          <p>
            Facilis quae exercitationem dolorem adipisci officiis numquam
            explicabo. Necessitatibus recusandae dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
