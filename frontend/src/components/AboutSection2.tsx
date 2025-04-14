import img6 from '../assets/img6.jpg';


const AboutSection2 = () => {
    return (
        <div className="px-4 md:px-20">
            
            {/* Left-text right-image section */}
            <div className="grid md:grid-cols-2 gap-x-4 mt-10 p-15 px-4 md:px-20">
                
                <div className="grid leading-none">
                    <h4 className="font-bold">OUR MISSION</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto illum.</p> <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto illum.</p> <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto illum.</p> <br />
                </div>
                <div>
                    <img
                        src={img6}
                        alt=""
                        className="w-full h-9/12"
                    />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection2;