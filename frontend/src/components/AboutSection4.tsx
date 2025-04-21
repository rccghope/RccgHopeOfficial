import img6 from '../assets/img6.jpg';

const AboutSection4 = () => {
  return (
    <div className="mt-50 h-[55rem] md:h-[40rem]">
      {/* Our Belief section */}
      <div className="relative h-[500px] w-full ">
        <img
          src={img6}
          alt="Background"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Overlayed Box */}
        <div className="absolute inset-x-0 top-70 mx-auto w-[95%] md:w-[90%] lg:w-[85%] bg-white bg-opacity-95 p-8 rounded-lg shadow-md">
          <h4 className="font-bold mb-4 text-center text-xl">OUR BELIEF</h4>
          <p className="text-gray-700 text-center leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            alias dolore veritatis nihil nemo eaque obcaecati similique rem id
            facere culpa modi aliquid neque incidunt, accusantium ea magnam
            deserunt dolores.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            neque maiores accusamus nostrum, distinctio nisi quas dolores maxime
            iste dolor ipsa fuga suscipit, autem quo eius deleniti et!
            Recusandae voluptates exercitationem quas corporis, magnam
            voluptatum aperiam corrupti non molestiae ipsa.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aliquam dolorum, nihil itaque asperiores cum dolorem quasi rem id
            temporibus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection4;
