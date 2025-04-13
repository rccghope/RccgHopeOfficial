import img6 from '../assets/img6.jpg';


const AboutSection2 = () => {
    return (
        <div>
            
            {/* Left-text right-image section */}
            <div className="inline-grid grid-cols-2 gap-x-4 mt-15 p-15">
                <div className="">
                    <h4 className="font-bold">OUR MISSION</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto illum.</p> <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto illum.</p> <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto illum.</p> <br />
                </div>
                <div>
                    <img
                        src={img6}
                        alt=""
                        className="w-full h-70"
                    />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection2;