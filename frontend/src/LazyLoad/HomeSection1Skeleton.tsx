import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeSection1Skeleton = () => {
  return (
    <div className="mt-10 w-full grid grid-cols-1  md:grid-cols-3 gap-4 px-4">
      <div className="w-full">
        <Skeleton height={224} className="rounded-md" />
      </div>
      <div className="w-full">
        <Skeleton height={224} className="rounded-md" />
      </div>
      <div className="w-full">
        <Skeleton height={224} className="rounded-md" />
      </div>
    </div>
  );
};

export default HomeSection1Skeleton;
