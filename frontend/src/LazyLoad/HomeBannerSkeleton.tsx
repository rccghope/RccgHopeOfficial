import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeBannerSkeleton = () => {
  return (
    <div>
      <Skeleton height="20rem" className="w-full rounded-md" />
    </div>
  );
};

export default HomeBannerSkeleton;
