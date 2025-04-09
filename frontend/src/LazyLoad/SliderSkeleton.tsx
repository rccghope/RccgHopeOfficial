// SliderSkeleton.tsx
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SliderSkeleton = () => {
  return (
    <div className="w-full h-screen relative">
      <Skeleton height="100%" width="100%" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <Skeleton width={200} height={40} className="mb-4" />
        <Skeleton width={300} height={40} className="mb-4" />
        <Skeleton width={400} height={20} className="mb-4" />
        <Skeleton width={350} height={20} />
        <div className="flex gap-4 mt-6">
          <Skeleton width={120} height={40} borderRadius={10} />
          <Skeleton width={120} height={40} borderRadius={10} />
        </div>
      </div>
    </div>
  );
};

export default SliderSkeleton;
