import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection3Skeleton = () => {
  return (
    <div className="mt-70 border-2 border-gray-300 rounded-xl p-4 md:p-10">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left h-[40rem] md:h-[20rem]">
        {/* Mobile Text Section Skeleton */}
        <div className="block md:hidden space-y-4 w-full">
          <Skeleton height={32} width={180} /> {/* Title */}
          <Skeleton count={3} height={20} />   {/* Paragraphs */}
        </div>

        {/* Image Section Skeleton */}
        <div className="w-full">
          <Skeleton height={300} className="w-full md:w-1/2 rounded-xl" />
        </div>

        {/* Desktop Text Section Skeleton */}
        <div className="hidden md:block space-y-4 w-full">
          <Skeleton height={32} width={220} /> {/* Title */}
          <Skeleton count={3} height={20} />   {/* Paragraphs */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection3Skeleton;
