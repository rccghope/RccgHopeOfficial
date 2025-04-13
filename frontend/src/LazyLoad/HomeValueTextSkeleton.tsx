import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeValueTextSkeleton = () => {
  return (
    <div>
      <div>
        {/* Title */}
        <Skeleton height={40} width={200} className="mb-4" />

        {/* Subtitle */}
        <Skeleton height={20} width={`80%`} className="mb-6" />

        {/* Belief Items */}
        <div className="mt-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex items-start gap-4 mb-4">
              {/* Circle Placeholder */}
              <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
              {/* Text Placeholder */}
              <Skeleton height={20} width={`80%`} />
            </div>
          ))}

          {/* Button */}
          <Skeleton height={48} width={120} className="mt-4 rounded" />
        </div>
      </div>
    </div>
  );
};

export default HomeValueTextSkeleton;
