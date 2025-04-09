import { FC, Suspense, lazy } from 'react';
import ErrorBoundary from './ErrorBoundary';
import HomeBeliefTextSkeleton from '../LazyLoad/HomeBeliefTextSkeleton';
import HomeBeliefImagesSkeleton from '../LazyLoad/HomeBeliefImagesSkeleton';

const HomeBeliefText = lazy(() => import('./HomeBeliefText'));
const HomeBeliefImage = lazy(() => import('./HomeBeliefImage'));

const HomeBelief: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-20 py-16 items-center">
      {/* Left Side - Beliefs */}
      <ErrorBoundary>
        <Suspense fallback={<HomeBeliefTextSkeleton />}>
          <HomeBeliefText />
        </Suspense>
      </ErrorBoundary>

      {/* Right Side - Image */}
      <div>
        <ErrorBoundary>
          <Suspense fallback={<HomeBeliefImagesSkeleton />}>
            <HomeBeliefImage />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default HomeBelief;
