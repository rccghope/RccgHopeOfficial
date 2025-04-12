import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection1Skeleton = () => {
    return (
        <div>
            {/* Little text */}
            <div className="flex justify-center items-center text-bold">
                <h5 className="text-bold"></h5>
            </div>

            {/* Left-text right-image section */}
            <div className="h-64 grid grid-rows-3 grid-flow gap-4">
                <div className="">
                    <h4></h4>
                    <p></p> <br />
                    <p></p> <br />
                    <p></p> <br />
                </div>
                <div>
                    
                </div>
            </div>


        </div>
    )
}

export default AboutSection1Skeleton