import img6 from '../assets/img6.jpg';

const AboutSection2 = () => {
  return (
    <div className="mt-20 border-2 border-gray-300 rounded-xl p-4 md:p-10">
      {/* Left-text right-image section */}
      <div className="md:relative grid md:grid-cols-2 gap-6 items-center h-[40rem] md:h-[20rem]">
        <div className="space-y-4">
          <h4 className="font-bold text-4xl">OUR MISSION</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto
            illum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto
            illum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto
            illum.
          </p>
        </div>
        <div>
          <img
            src={img6}
            alt="About us"
            className="md:absolute w-full md:w-1/2 md:max-h-[400px] object-cover rounded-xl top-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
