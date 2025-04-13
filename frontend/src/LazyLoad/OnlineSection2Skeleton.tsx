
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const OnlineSection2Skeleton = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center py-4 mt-20">
        <Skeleton width={250} height={40} />
        <Skeleton width={300} height={25} className="mt-4" />
      </div>

      {/* Options Section */}
      <div className="mt-10 mb-20 flex justify-center">
        <div className="flex flex-row gap-4">
          <div className="bg-gray-100 p-6 rounded-lg w-40 h-40 flex flex-col items-center justify-center">
            <Skeleton circle width={30} height={30} />
            <Skeleton width={100} height={20} className="mt-4" />
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center">
        <Skeleton width={350} height={20} />
      </div>
    </div>
  );
};

export default OnlineSection2Skeleton;
