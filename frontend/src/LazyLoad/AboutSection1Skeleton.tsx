import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection1Skeleton = () => {
    return (
        <div>
            {/* Little text after about us banner*/}
            <div className="flex justify-center items-center text-bold">
                <h5 className="text-bold"></h5>
            </div>
        </div>
    )
}

export default AboutSection1Skeleton