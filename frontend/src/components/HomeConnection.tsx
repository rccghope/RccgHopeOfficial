import React, { Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary';
import HomeConnectionTextSkeleton from '../LazyLoad/HomeConnectionTextSkeleton';
import HomeConnectionImagesSkeleton from '../LazyLoad/HomeConnectionImagesSkeleton';

const HomeConnectionText = React.lazy(() => import('./HomeConnectionText'));
const HomeConnectionImages = React.lazy(() => import('./HomeConnectionImages'));

const HomeConnection = () => {
  return (
    <div>
      <div className="mb-20">
        <ErrorBoundary>
          <Suspense fallback={<HomeConnectionTextSkeleton />}>
            <HomeConnectionText />
          </Suspense>
        </ErrorBoundary>
        <div>
          <ErrorBoundary>
            <Suspense fallback={<HomeConnectionImagesSkeleton />}>
              <HomeConnectionImages />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default HomeConnection;
