import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeDifferenceTextSkeleton = () => {
  return (
    <div className="mt-30 text-center">
      <Skeleton height={40} width={300} className="mx-auto" />
    </div>
  );
};

export default HomeDifferenceTextSkeleton;
