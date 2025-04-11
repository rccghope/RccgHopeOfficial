import React, { Suspense } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import OnlineBannerSkeleton from '../LazyLoad/OnlineBannerSkeleton';
import WatchLiveBodySkeleton from '../LazyLoad/WatchLiveBodySkeleton';

const WatchLiveBanner = React.lazy(
  () => import('../components/WatchLiveBaner'),
);
const WatchLiveBody = React.lazy(() => import('../components/WatchLiveBody'));

const WatchLive = () => {
  return (
    <div>
      <ErrorBoundary>
        {' '}
        <Suspense fallback={<OnlineBannerSkeleton />}>
          <WatchLiveBanner />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<WatchLiveBodySkeleton />}>
          <WatchLiveBody />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default WatchLive;
