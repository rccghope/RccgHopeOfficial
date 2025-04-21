import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection4Skeleton: React.FC = () => {
  return (
    <div className="mt-20 bg-gray-400 h-auto py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto rounded-xl p-8 md:p-12 text-center shadow-xl bg-gray-300 text-white">
        {/* Title Skeleton */}
        <div className="mb-6">
          <Skeleton height={40} width={200} baseColor="#3b3b3b" highlightColor="#4f4f4f" style={{ margin: '0 auto' }} />
        </div>

        {/* Paragraph Skeleton */}
        <div className="space-y-3 text-left md:text-center">
          <Skeleton count={3} height={16} baseColor="#3b3b3b" highlightColor="#4f4f4f" />
          <Skeleton count={3} height={16} baseColor="#3b3b3b" highlightColor="#4f4f4f" />
          <Skeleton count={3} height={16} baseColor="#3b3b3b" highlightColor="#4f4f4f" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection4Skeleton;
