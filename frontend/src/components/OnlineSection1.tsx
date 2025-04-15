import img6 from '../assets/img6.jpg';
const OnlineSection1 = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 border-t-2 ">
        {' '}
        <h1 className="text-4xl font-bold text-center py-10 mt-10">
          Why Your Giving Matters
        </h1>
      </div>
      {/* Left side */}
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="w-full   flex flex-col">
          <p className="border-t-2 border-b-2 md:border-r-2 py-15 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo a est cumque facilis omnis, quod asperiores ratione eum unde
            blanditiis, eaque dicta inventore aspernatur nisi consequatur!
            Ipsam, magnam magni.
          </p>
          <p className=" border-b-2 md:border-r-2 py-15 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo a est cumque facilis omnis, quod asperiores ratione eum unde
            blanditiis, eaque dicta inventore aspernatur nisi consequatur!
            Ipsam, magnam magni.
          </p>
          <p className=" border-b-2 md:border-r-2 py-15 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo a est cumque facilis omnis, quod asperiores ratione eum unde
            blanditiis, eaque dicta inventore aspernatur nisi consequatur!
            Ipsam, magnam magni.
          </p>
        </div>
        {/* Middle side */}
        <div className="w-full  md:h-14">
          <img
            src={img6}
            alt=""
            className="h-[34rem] object-cover w-full border-t-2 border-b-2  "
          />
          <p className="mt-2 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo a est cumque facilis omnis, quod asperiores ratione eum unde
            blanditiis, eaque dicta inventore aspernatur nisi consequatur!
            Ipsam, magnam magni.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full  flex flex-col ">
          <p className="border-t-2 md:border-l-2 border-b-2 py-15 px-2 mt-5 md:mt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo a est cumque facilis omnis, quod asperiores ratione eum unde
            blanditiis, eaque dicta inventore aspernatur nisi consequatur!
            Ipsam, magnam magni.
          </p>
          <p className=" border-b-2 md:border-l-2 py-15 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo a est cumque facilis omnis, quod asperiores ratione eum unde
            blanditiis, eaque dicta inventore aspernatur nisi consequatur!
            Ipsam, magnam magni.
          </p>
          <p className=" md:border-b-2 md:border-l-2 py-15 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo a est cumque facilis omnis, quod asperiores ratione eum unde
            blanditiis, eaque dicta inventore aspernatur nisi consequatur!
            Ipsam, magnam magni.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlineSection1;
