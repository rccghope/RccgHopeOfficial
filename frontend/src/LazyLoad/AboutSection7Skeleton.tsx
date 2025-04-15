import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutUsSection7Skeleton = () => {
  return (
    <div className="mb-7">
      <div>
        {/* Title skeleton */}
        <Skeleton height={40} width={250} className="mx-auto mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service card skeletons */}
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
              <Skeleton height={30} width="80%" className="mb-4 mx-auto" />
              <Skeleton count={3} height={16} className="mb-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection7Skeleton;
