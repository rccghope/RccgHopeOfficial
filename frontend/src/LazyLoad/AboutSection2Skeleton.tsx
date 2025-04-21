import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonAboutSection2 = () => {
  return (
    <div className="mt-20 rounded-xl p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Skeleton */}
        <div className="space-y-4">
          <Skeleton height={40} width="40%" />
          <Skeleton count={1} height={20} />
          <Skeleton count={1} height={20} width="85%" />
          <Skeleton count={1} height={20} width="75%" />
        </div>

        {/* Image Skeleton */}
        <div>
          <Skeleton height={300} className="md:h-[400px] w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonAboutSection2;
