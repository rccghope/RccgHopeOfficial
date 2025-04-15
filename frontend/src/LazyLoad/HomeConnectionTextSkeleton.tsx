import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeConnectionTextSkeleton = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Skeleton height={40} width={`80%`} className="mx-auto mb-4" />
        <Skeleton height={20} width={`60%`} className="mx-auto" />
      </div>
    </div>
  );
};

export default HomeConnectionTextSkeleton;
