import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection6Skeleton = () => {
  return (
    <div className="mt-20">
      {/* Section title */}
      <Skeleton height={40} width={200} className="mx-auto mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left image skeleton */}
        <div>
          <Skeleton height={480} className="w-full rounded-lg" />
        </div>

        {/* Right text skeleton */}
        <div>
          <Skeleton height={30} width="60%" className="mb-4" />
          <div className="space-y-4">
            <Skeleton count={3} height={16} />
            <Skeleton count={2} height={16} />
            <Skeleton count={3} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection6Skeleton;
