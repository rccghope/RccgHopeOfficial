import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DiscoverSkeleton = () => {
  return (
    <div className="bg-gray-300 w-full h-36 grid grid-cols-12 gap-4 px-4 md:px-20 text-white">
      {/* Left side - Skeleton for text */}
      <div className="col-span-8 flex flex-col justify-center items-start">
        <Skeleton width="80%" height={30} className="mb-2" />
        <Skeleton width="70%" height={30} />
      </div>

      {/* Right side - Skeleton for button */}
      <div className="col-span-4 flex flex-col justify-center items-center">
        <Skeleton width={120} height={40} />
      </div>
    </div>
  );
};

export default DiscoverSkeleton;
