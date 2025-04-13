import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection6Skeleton = () => {
    return (
        <div>
            {/* Left-text right-image section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Tall image by the left */}
                    <div>
                        <img src="" className="w-full h-full object-cover rounded-lg"/>
                    </div>

                    {/* Text by the right */}
                    <div className="h-full">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4"></h2>

                        <p className="leading-relaxed">
                            
                        </p>
                    </div>

                </div>
                
            </div>


        </div>
    )
}

export default AboutSection6Skeleton