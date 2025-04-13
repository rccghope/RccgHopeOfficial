import img6 from '../assets/img6.jpg';


const AboutSection5 = () => {
    return (
        <div className="px-4 md:px-20">
            <div className="">

            {/* Leadership section */}
            <h2 className="text-3xl font-bold text-center mb-6">Meet our Leaders</h2>
            <p className="text-center mb-10">Our Pastors and team are committed to serving you and our community</p>

            <div className=" grid grid-cols-12 gap-6">
                {/* Left tall image */}
                <div className="lg:col-span-3">
                    <img src={img6} alt="Main leadership image" className="w-full h-full object-cover rounded-lg"/>
                </div>
                {/* Right Grid of 6 Images */}
                {/*   lg:grid-cols-3 grid-cols-12  */}
                <div className="col-span-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <img src={img6} className="w-full h-80 object-cover rounded-lg h-40 md:h-48 lg:h-64"/>
                <img src={img6} className="w-full h-80 object-cover rounded-lg h-40 md:h-48 lg:h-64" />
                <img src={img6} className="w-full h-80 object-cover rounded-lg h-40 md:h-48 lg:h-64" />
                <img src={img6} className="w-full h-80 object-cover rounded-lg h-40 md:h-48 lg:h-64" />
                <img src={img6} className="w-full h-80 object-cover rounded-lg h-40 md:h-48 lg:h-64" />
                <img src={img6} className="w-full h-80 object-cover rounded-lg h-40 md:h-48 lg:h-64" />
                </div>
            </div>


</div>
        </div>
        // <div className="px-4 md:px-20 w-screen p-20 mb-5 mx-auto max-w-7xl py-12 mt-40">

        //     {/* Leadership section */}
        //     <h2 className="text-3xl font-bold text-center mb-6">Meet our Leaders</h2>
        //     <p className="text-center mb-10">Our Pastors and team are committed to serving you and our community</p>

        //     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        //         {/* Left tall image */}
        //         <div className="md:w-1/4">
        //             <img src={img6} alt="Main leadership image" className="w-full h-full object-cover rounded-lg"/>
        //         </div>
        //         {/* Right Grid of 6 Images */}
        //         <div className="md:w-3/4 grid grid-cols-3 grid-rows-2 gap-4">
        //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
        //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
        //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
        //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
        //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
        //             <img src={img6} className="w-full h-80 object-cover rounded-lg" />
        //         </div>
        //     </div>
            

        // </div>
    )
}

export default AboutSection5;