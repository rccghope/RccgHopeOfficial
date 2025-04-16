import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const WatchLiveBodySkeleton = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center px-2 gap-2 mt-5 md:mt-20 md:pb-20">
        <div className="py-4 px-8 bg-gray-100 rounded-md">
          <Skeleton width={120} height={20} />
        </div>
        <div className="py-4 px-8 bg-gray-100 rounded-md">
          <Skeleton width={120} height={20} />
        </div>
      </div>
    </div>
  );
};

export default WatchLiveBodySkeleton;