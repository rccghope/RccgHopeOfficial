import img6 from '../assets/img6.jpg';


const AboutSection5 = () => {
    return (
        <div className="w-screen p-20 mb-80 mx-auto max-w-7xl py-12">

            {/* Leadership section */}
            <h2 className="text-3xl font-bold text-center mb-6">Meet our Leaders</h2>
            <p className="text-center mb-10">Our Pastors and team are committed to serving you and our community</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left tall image */}
                <div>
                    <img src={img6} alt="Main leadership image" className="w-full h-full object-cover rounded-lg"/>
                </div>
                {/* Right Grid of 6 Images */}
                <div className="grid grid-cols-3 grid-rows-2 gap-1">
                    <img src={img6} className="w-full h-80 object-cover rounded-lg" />
                    <img src={img6} className="w-full h-80 object-cover rounded-lg" />
                    <img src={img6} className="w-full h-80 object-cover rounded-lg" />
                    <img src={img6} className="w-full h-80 object-cover rounded-lg" />
                    <img src={img6} className="w-full h-80 object-cover rounded-lg" />
                    <img src={img6} className="w-full h-80 object-cover rounded-lg" />
                </div>
            </div>
            

        </div>
    )
}

export default AboutSection5;