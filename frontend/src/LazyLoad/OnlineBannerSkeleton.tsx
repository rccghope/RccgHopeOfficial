import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const OnlineBannerSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col w-full h-[30rem] justify-center items-center bg-gray-100 px-4">
        <Skeleton height={40} width={250} className="mb-4" />
        <Skeleton height={20} width={300} count={2} />
      </div>
    </div>
  );
};

export default OnlineBannerSkeleton;
