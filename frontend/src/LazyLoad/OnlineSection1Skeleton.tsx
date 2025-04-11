import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const OnlineSection1Skeleton = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-center items-center mt-10 border-t-2">
        <h1 className="text-4xl font-bold text-center py-10 mt-10">
          <Skeleton width={300} height={40} />
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 md:px-0">
        {/* Left Side Skeletons */}
        <div className="flex flex-col gap-4">
          <Skeleton height={120} />
          <Skeleton height={120} />
          <Skeleton height={120} />
        </div>

        {/* Middle Side Skeleton */}
        <div>
          <Skeleton height={544} className="w-full" />
          <Skeleton count={2} height={20} className="mt-2" />
        </div>

        {/* Right Side Skeletons */}
        <div className="flex flex-col gap-4">
          <Skeleton height={120} />
          <Skeleton height={120} />
          <Skeleton height={120} />
        </div>
      </div>
    </div>
  );
};

export default OnlineSection1Skeleton;
