import React, { Suspense } from 'react';

const ContactBanner = React.lazy(() => import('../components/ContactBanner'));
import ErrorBoundary from '../components/ErrorBoundary';
import ContactBannerImageSkeleton from '../LazyLoad/ContactBannerSkeleton';
const ContactForm = React.lazy(() => import('../components/ContactForm'));

const ContactUs = () => {
  return (
    <div>
      <ErrorBoundary>
        {' '}
        <Suspense fallback={<ContactBannerImageSkeleton />}>
          <ContactBanner />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        {' '}
        <Suspense fallback={<div>Loading</div>}>
          {' '}
          <ContactForm />
        </Suspense>
      </ErrorBoundary>

      

      <div className=" px-4 md:px-20"></div>
    </div>
  );
};

export default ContactUs;
