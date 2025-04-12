import React, { Suspense } from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import AboutBannerSkeleton from '../LazyLoad/AboutBannerSkeleton';
import AboutSection1Skeleton from '../LazyLoad/AboutSection1Skeleton';


const AboutBanner = React.lazy(() => import('../components/AboutBanner'));
const AboutSection1 = React.lazy(() => import('../components/AboutSection1'));

const AboutUs = () => {
  return (
    <div className="h-auto">
      <ErrorBoundary>
        {' '}
        <Suspense fallback={<AboutBannerSkeleton />}>
          <AboutBanner />
        </Suspense>
      </ErrorBoundary>

      <div className="">
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<AboutSection1Skeleton />}>
            <AboutSection1 />
          </Suspense>
        </ErrorBoundary>
      </div>

    </div>
  );
};

export default AboutUs;
