import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection3Skeleton: React.FC = () => {
  return (
    <div className="mt-20 rounded-xl p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Skeleton */}
        <div className="w-full">
          <Skeleton
            height={400}
            style={{ borderRadius: '0.75rem' }}
            baseColor="#e0e0e0"
            highlightColor="#f5f5f5"
          />
        </div>

        {/* Text Skeleton */}
        <div className="space-y-4">
          {/* Title */}
          <Skeleton
            height={40}
            width={180}
            baseColor="#facc15" // light yellow-ish to hint at yellow-400
            highlightColor="#fde68a"
          />

          {/* Paragraphs */}
          <Skeleton count={1} height={16} />
          <Skeleton count={1} height={16} width="90%" />
          <Skeleton count={1} height={16} width="85%" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection3Skeleton;
