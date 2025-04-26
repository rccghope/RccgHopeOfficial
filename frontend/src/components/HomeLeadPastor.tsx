import React, { FC, Suspense } from 'react';
import { useThemeStore } from '../store/themeStore'; 

import ErrorBoundary from './ErrorBoundary';
import HomeLeadPastorTextSkeleton from '../LazyLoad/HomeLeadPastorTextSkeleton';
import HomeLeadPastorImagesSkeleton from '../LazyLoad/HomeLeadPastorImagesSkeleton';

const HomeLeadPastorImages = React.lazy(() => import('./HomeLeadPastorImages'));
const HomeLeadPastorText = React.lazy(() => import('./HomeLeadPastorText'));

const HomeLeadPastor: FC = () => {
  const mode = useThemeStore((state) => state.mode);
 

  return (
    <div className={`${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen py-16`}>
      <h1 className={`text-4xl font-bold text-center mb-10 mt-10 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        MEET OUR LEAD PASTOR
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-20 py-16 items-center">
        {/* Left Side - Beliefs */}
        <ErrorBoundary>
          <Suspense fallback={<HomeLeadPastorTextSkeleton />}>
            <HomeLeadPastorText />
          </Suspense>
        </ErrorBoundary>

        {/* Right Side - Image */}
        <div>
          <ErrorBoundary>
            <Suspense fallback={<HomeLeadPastorImagesSkeleton />}>
              <HomeLeadPastorImages />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default HomeLeadPastor;
