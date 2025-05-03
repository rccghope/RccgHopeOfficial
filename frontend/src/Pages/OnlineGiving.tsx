import React, { Suspense } from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import OnlineBannerSkeleton from '../LazyLoad/OnlineBannerSkeleton';
import OnlineSection1Skeleton from '../LazyLoad/OnlineSection1Skeleton';
import OnlineSection2Skeleton from '../LazyLoad/OnlineSection2Skeleton';

const OnlineBanner = React.lazy(() => import('../components/OnlineBanner'));
const OnlineSection1 = React.lazy(() => import('../components/OnlineSection1'));
const OnlineSection2 = React.lazy(() => import('../components/OnlineSection2'));

const OnlineGiving = () => {
  return (
    <div className="h-auto">
      <ErrorBoundary>
        {' '}
        <Suspense fallback={<OnlineBannerSkeleton />}>
          <OnlineBanner />
        </Suspense>
      </ErrorBoundary>

      <div className=" ">
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<OnlineSection1Skeleton />}>
            <OnlineSection1 />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<OnlineSection2Skeleton />}>
            {' '}
            <OnlineSection2 />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default OnlineGiving;
