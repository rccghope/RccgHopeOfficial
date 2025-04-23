import React, { Suspense } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
const DarkModeUI = React.lazy(() => import('../components/DarkMode'));

const ContactUs = () => {
  return (
    <div>
      <ErrorBoundary>
        {' '}
        <Suspense fallback={<div>Loading</div>}>
          {' '}
          <DarkModeUI />
        </Suspense>
      </ErrorBoundary>

      

      <div className=" px-4 md:px-20"></div>
    </div>
  );
};

export default ContactUs;
