import React, { Suspense } from 'react';
import img3 from '../assets/img3.jpg';

import ErrorBoundary from './ErrorBoundary';
import ContactBannerImageSkeleton from '../LazyLoad/ContactBannerImageSkeleton';
const ContactBannerImage = React.lazy(() => import('./ContactBannerImage'));

const ContactBanner = () => {
  return (
    <div className="">
      <div className="w-full h-[170rem] md:h-[70rem] lg:h-[40rem]">
        <div
          className="relative w-full h-[25rem] mb- bg-gray-300"
          style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover' }}
        >
          <div className='flex flex-col items-center justify-center h-full  bg-opacity-50 text-white'>
            <h1 className='text-4xl font-bold'>Get in Touch</h1>
            <p>We'd love to hear from you! Reach out with any</p>
            <p>questions or inquirdiv</p>
          </div>
          {/* Overlay Grid */}
          <div className="absolute top-80 w-full px-4 md:px-20 ">
            <div className="">
              <ErrorBoundary>
                {' '}
                <Suspense fallback={<ContactBannerImageSkeleton />}>
                  <ContactBannerImage />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
