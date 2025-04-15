import React, { Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary';
import ContactFormPageSkeleton from '../LazyLoad/ContactFormPageSkeleton';

import ContactFormImageSkeleton from '../LazyLoad/ContactFormImageSkeleton';
const ContactFormImage = React.lazy(() => import('./ContactFormImage'));
const ContactFormPage = React.lazy(() => import('./ContactFormPage'));

const ContactForm = () => {
  return (
    <div className="px-4 mt-20 md:px-20 mb-16 md:mt-60 lg:mt-50">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-start">
        {/* Left - Form */}

        <ErrorBoundary>
          {' '}
          <Suspense fallback={<ContactFormPageSkeleton />}>
            <ContactFormPage />
          </Suspense>
        </ErrorBoundary>

        {/* Right - Image */}
        <div>
          <ErrorBoundary>
            <Suspense fallback={<ContactFormImageSkeleton />}>
              {' '}
              <ContactFormImage />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
