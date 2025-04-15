import React, { Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary';
import HomeDifferenceTextSkeleton from '../LazyLoad/HomeDifferenceTextSkeleton';
import HomeDifferenceImagesSkeleton from '../LazyLoad/HomeDifferenceImagesSkeleton';

const HomeDifferenceText = React.lazy(() => import('./HomeDifferenceText'));
const HomeDifferenceImages = React.lazy(() => import('./HomeDifferenceImages'));
const HomeDifference = () => {
  return (
    <div>
      <div>
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<HomeDifferenceTextSkeleton />}>
            <HomeDifferenceText />
          </Suspense>
        </ErrorBoundary>

        <div>
          <ErrorBoundary>
            {' '}
            <Suspense fallback={<HomeDifferenceImagesSkeleton />}>
              <HomeDifferenceImages />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default HomeDifference;
