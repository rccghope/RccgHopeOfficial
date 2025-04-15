import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeDifferenceImagesSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 mb-20">
      {[1, 2, 3, 4].map((item) => (
        <div key={item}>
          <Skeleton height={256} className="rounded-lg" /> {/* Image */}
          <Skeleton height={20} width={100} className="mx-auto mt-4" />{' '}
          {/* Text */}
        </div>
      ))}
    </div>
  );
};

export default HomeDifferenceImagesSkeleton;
