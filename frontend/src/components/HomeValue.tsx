import React, { FC, Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary';
import HomeValueTextSkeleton from '../LazyLoad/HomeValueTextSkeleton';
import HomeValueImageSkeleton from '../LazyLoad/HomeValueImageSkeleton';
const HomeValueImage = React.lazy(() => import('./HomeValueImage'));
const HomeValueText = React.lazy(() => import('./HomeValueText'));

const HomeValue: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-20 py-16 items-center">
      {/* Left Side - Image */}
      <div>
        <ErrorBoundary>
          <Suspense fallback={<HomeValueImageSkeleton />}>
            <HomeValueImage />
          </Suspense>
        </ErrorBoundary>
      </div>
      {/* Right Side - Beliefs */}
      <ErrorBoundary>
        {' '}
        <Suspense fallback={<HomeValueTextSkeleton />}>
          <HomeValueText />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default HomeValue;
