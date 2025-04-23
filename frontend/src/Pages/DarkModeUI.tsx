import React, { Suspense } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
const ColorToggle = React.lazy(() => import('../components/ColorToggle'));

const DarkModeUI = () => {
  return (
    <div>
      <ErrorBoundary>
        {' '}
        <Suspense fallback={<div>Loading</div>}>
          {' '}
          <ColorToggle />
        </Suspense>
      </ErrorBoundary>
      <div className=" px-4 md:px-20"></div>
    </div>
  );
};

export default DarkModeUI;
