import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection4Skeleton = () => {
  return (
    <div className="mt-50 h-[55rem] md:h-[40rem]">
      <div className="relative h-[500px] w-full">
        {/* Background image skeleton */}
        <Skeleton className="w-full h-full rounded-lg" height="100%" />

        {/* Overlayed Box Skeleton */}
        <div className="absolute inset-x-0 top-70 mx-auto w-[95%] md:w-[90%] lg:w-[85%] bg-white bg-opacity-95 p-8 rounded-lg shadow-md">
          <Skeleton height={24} width={120} className="mx-auto mb-4" /> {/* Title */}
          <div className="space-y-3">
            <Skeleton count={6} height={16} /> {/* Simulated paragraph lines */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection4Skeleton;
