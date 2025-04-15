import img6 from '../assets/img6.jpg';

const AboutSection6 = () => {
  return (
    <div className="s mt-20">
      <h1 className="text-5xl font-bold item-center mb-10 text-center">
        Our Story
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tall image by the left */}
        <div>
          <img
            src={img6}
            className="w-full h-[30rem] object-cover rounded-lg"
          />
        </div>

        {/* Text by the right */}
        <div>
          <h4 className=" font-bold text-2xl mb-4">
            A brief history of the church.
          </h4>

          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            necessitatibus dolore unde nulla perferendis accusamus architecto,
            tenetur alias odit at sunt temporibus aut doloribus, consectetur
            dolorum? Fugiat deserunt, harum itaque natus tenetur quidem
            accusantium odit aliquid eveniet voluptatum dolor recusandae?
            Commodi, exercitationem. Aspernatur repudiandae corporis distinctio,
            vel est asperiores soluta repellat praesentium molestias tempore,
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            dolorem aperiam animi quasi rem non officiis explicabo facilis
            delectus adipisci?
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            distinctio. Facere accusamus velit ratione quo magni minima, harum
            aliquam esse ut fuga dolor veritatis obcaecati et, qui vero odio
            quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection6;
