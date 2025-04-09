import React, { Suspense } from 'react';
import HomeBelief from '../components/HomeBelief';
import HomeConnection from '../components/HomeConnection';
import HomeDifference from '../components/HomeDifference';
import HomeLeadPastor from '../components/HomeLeadPastor';
import HomeValue from '../components/HomeValue';
import ErrorBoundary from '../components/ErrorBoundary';
import SliderSkeleton from '../LazyLoad/SliderSkeleton';
import HomeSection1Skeleton from '../LazyLoad/HomeSection1Skeleton';
import DiscoverSkeleton from '../LazyLoad/DiscoverSkeleton';
import HomeBannerSkeleton from '../LazyLoad/HomeBannerSkeleton';
import HomeBanner2Skeleton from '../LazyLoad/HomeBanner2Skeleton';

{
  /*for the fallbacks*/
}
const HomeSection1 = React.lazy(() => import('../components/HomeSection1'));
const Slider = React.lazy(() => import('../components/Slider'));
const Discover = React.lazy(() => import('../components/Discover'));
const HomeBanner = React.lazy(() => import('../components/HomeBanner'));
const HomeBanner2 = React.lazy(() => import('../components/HomeBanner2'));

const HomePage = () => {
  return (
    <div>
      <ErrorBoundary>
        {' '}
        <Suspense fallback={<SliderSkeleton />}>
          <Slider />
        </Suspense>
      </ErrorBoundary>
      <div className=" px-4 md:px-20">
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<HomeSection1Skeleton />}>
            <HomeSection1 />
          </Suspense>
        </ErrorBoundary>
        <HomeBelief />
      </div>

      <ErrorBoundary>
        <Suspense fallback={<DiscoverSkeleton />}>
          <Discover />
        </Suspense>
      </ErrorBoundary>
      <div className=" px-4 md:px-20">
        <HomeValue />
        <HomeLeadPastor />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<HomeBannerSkeleton />}>
          <HomeBanner />
        </Suspense>
      </ErrorBoundary>

      <div className=" px-4 md:px-20">
        <HomeConnection />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<HomeBanner2Skeleton />}>
          <HomeBanner2 />
        </Suspense>
      </ErrorBoundary>

      <div className=" px-4 md:px-20">
        <HomeDifference />
      </div>
    </div>
  );
};

export default HomePage;
