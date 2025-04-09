import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeLeadPastorImagesSkeleton = () => {
  return (
    <div>
      <Skeleton
        height={300}
        className="rounded-xl shadow-md w-full"
        style={{ borderRadius: '0.75rem' }} // Matches Tailwind `rounded-xl`
      />
    </div>
  );
};

export default HomeLeadPastorImagesSkeleton;
