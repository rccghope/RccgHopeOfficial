import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection2Skeleton = () => {
  return (
    <div className="mt-20 border-2 border-gray-300 rounded-xl p-4 md:p-10">
      <div className="md:relative grid md:grid-cols-2 gap-6 items-center h-[40rem] md:h-[20rem]">
        {/* Left text section skeleton */}
        <div className="space-y-4">
          <Skeleton height={40} width={200} /> {/* Title */}
          <Skeleton count={3} height={20} /> {/* Paragraphs */}
        </div>

        {/* Right image skeleton */}
        <div>
          <Skeleton height={300} className="w-full md:w-1/2 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection2Skeleton;
