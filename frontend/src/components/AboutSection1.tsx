import img6 from '../assets/img6.jpg';


const AboutSection1 = () => {
    return (
        <div>
            <div className="flex justify-center items-center text-bold mt-7 w-auto">
                {' '}
                <h5 className="font-bold text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatum autem at quae officia dicta maxime adipisci repellat, architecto soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem soluta ullam excepturi et sapiente.</h5>
            </div>
            {/* Left-text right-image section */}
            <div className="inline-grid geid-cols-2 gap-x-4 mt-15">
                <div className="">
                    <h4 className="text-bold">Our Mission</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto illum.</p> <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto illum.</p> <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quis quos necessitatibus odio obcaecati eos dolore sequi nihil iusto illum.</p> <br />
                </div>
                <div>
                    <img
                        src={img6}
                        alt=""
                        className="w-1/2 "
                    />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection1;