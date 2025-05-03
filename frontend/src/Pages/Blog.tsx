import React, { Suspense } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import OnlineBannerSkeleton from '../LazyLoad/OnlineBannerSkeleton';
import BlogScri from '../components/BlogScri';

const BlogBanner = React.lazy(() => import('../components/BlogBanner'));
const BlogSection1 = React.lazy(() => import('../components/BlogSection1'));
const BlogTestimony = React.lazy(() => import('../components/BlogTestimony'));
const BlogFace = React.lazy(() => import('../components/BlogFace'));
const BlogWeekReview = React.lazy(() => import('../components/BlogWeekReview'));

const Blog = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<OnlineBannerSkeleton />}>
          <BlogBanner />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback="">
          <BlogSection1 />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback="">
          <BlogTestimony />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback="">
          <BlogFace />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback="">
          <BlogWeekReview />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback="">
          <BlogScri />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Blog;
