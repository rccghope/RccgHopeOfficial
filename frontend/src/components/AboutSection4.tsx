import img6 from '../assets/img6.jpg';


const AboutSection4 = () => {
    return (
        <div className="w-screen p-20 mb-80">

            {/* Our Belief section */}
           <div className="relative h-[500px] w-full" >
            <img src={img6} className="w-full h-full rounded-lg" />

            {/* Overlayed Box */}
            <div className="top-1/2 h-85 bg-gray p-8 rounded-lg shadow-md mt-[100px] bg-white bg-opacity-95 absolute inset-x-0 bottom-[-60px] mx-auto w-[98%] md:w-[90%] lg:w-[85%]">
                <h4 className="font-bold mb-4 text-center">OUR BELIEF</h4>
                <p className="text-gray-700 text-center leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias dolore veritatis nihil nemo  eaque obcaecati similique rem id facere culpa modi aliquid neque incidunt, accusantium ea magnam deserunt dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione neque maiores accusamus nostrum, <br /><br /> distinctio nisi quas dolores maxime iste dolor ipsa fuga suscipit, autem quo eius deleniti et! Recusandae voluptates exercitationem quas corporis, magnam voluptatum aperiam corrupti non molestiae ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam dolorum, nihil itaque asperiores cum dolorem quasi rem id temporibus? </p>
            </div>
            <br />
           </div>
        </div>
    )
}

export default AboutSection4;