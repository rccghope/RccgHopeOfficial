import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeBanner2Skeleton = () => {
  return (
    <div>
      <div className="w-full h-[700px] bg-gray-200 flex flex-col items-center justify-center gap-6 px-4">
        <Skeleton height={50} width={300} />
        <Skeleton height={50} width={320} />
        <Skeleton height={25} width={260} style={{ marginTop: '40px' }} />
        <Skeleton height={50} width={160} style={{ marginTop: '30px' }} />
      </div>
    </div>
  );
};

export default HomeBanner2Skeleton;
