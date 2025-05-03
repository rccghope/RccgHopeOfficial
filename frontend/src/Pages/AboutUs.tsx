import React, { Suspense } from 'react';

import ErrorBoundary from '../components/ErrorBoundary';
import AboutBannerSkeleton from '../LazyLoad/AboutBannerSkeleton';
import AboutSection1Skeleton from '../LazyLoad/AboutSection1Skeleton';
import AboutSection2Skeleton from '../LazyLoad/AboutSection2Skeleton';
import AboutSection3Skeleton from '../LazyLoad/AboutSection3Skeleton';
import AboutSection4Skeleton from '../LazyLoad/AboutSection4Skeleton';
import AboutSection5Skeleton from '../LazyLoad/AboutSection5Skeleton';
import AboutSection6Skeleton from '../LazyLoad/AboutSection6Skeleton';
import AboutSection7Skeleton from '../LazyLoad/AboutSection7Skeleton';

const AboutBanner = React.lazy(() => import('../components/AboutBanner'));
const AboutSection1 = React.lazy(() => import('../components/AboutSection1'));
const AboutSection2 = React.lazy(() => import('../components/AboutSection2'));
const AboutSection3 = React.lazy(() => import('../components/AboutSection3'));
const AboutSection4 = React.lazy(() => import('../components/AboutSection4'));
const AboutSection5 = React.lazy(() => import('../components/AboutSection5'));
const AboutSection6 = React.lazy(() => import('../components/AboutSection6'));
const AboutSection7 = React.lazy(() => import('../components/AboutSection7'));

const AboutUs = () => {
  return (
    <div className="h-auto">
      <ErrorBoundary>
        {' '}
        <Suspense fallback={<AboutBannerSkeleton />}>
          <AboutBanner />
        </Suspense>
      </ErrorBoundary>
      <div className=" ">
        {' '}
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<AboutSection1Skeleton />}>
            <AboutSection1 />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<AboutSection2Skeleton />}>
            <AboutSection2 />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<AboutSection3Skeleton />}>
            <AboutSection3 />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<AboutSection4Skeleton />}>
            <AboutSection4 />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<AboutSection5Skeleton />}>
            <AboutSection5 />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<AboutSection6Skeleton />}>
            <AboutSection6 />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          {' '}
          <Suspense fallback={<AboutSection7Skeleton />}>
            <AboutSection7 />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default AboutUs;
