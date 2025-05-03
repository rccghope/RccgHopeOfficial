import React, { Suspense } from 'react';

import img25 from '../assets/img25.jpg';

import ErrorBoundary from './ErrorBoundary';
import ContactBannerImageSkeleton from '../LazyLoad/ContactBannerImageSkeleton';
const ContactBannerImage = React.lazy(() => import('./ContactBannerImage'));

const ContactBanner = () => {
  return (
    <div>
      <div className="w-full h-[170rem] md:h-[70rem] lg:h-[40rem]">
        <div
          className="relative w-full h-[25rem] bg-gray-300"
          style={{
            backgroundImage: `url(${img25})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black/50 text-white text-center px-4">
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p>We'd love to hear from you! Reach out with any</p>
            <p>questions or inquiries</p>
          </div>

          {/* Overlay Grid */}
          <div className="absolute top-80 w-full px-4 md:px-20">
            <ErrorBoundary>
              <Suspense fallback={<ContactBannerImageSkeleton />}>
                <ContactBannerImage />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
