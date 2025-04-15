import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection5Skeleton = () => {
  return (
    <div className="mt-40">
      <div>
        {/* Title and subtitle skeleton */}
        <Skeleton height={40} width={300} className="mx-auto mb-4" />
        <Skeleton height={20} width={400} className="mx-auto mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left tall image skeleton */}
          <div className="md:col-span-3">
            <Skeleton height={400} className="w-full h-full rounded-lg" />
          </div>

          {/* Right grid of 6 image skeletons */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {[...Array(6)].map((_, idx) => (
                <div key={idx}>
                  <Skeleton height={320} className="w-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection5Skeleton;
