import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ContactFormSkeleton = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 mt-10">
        <Skeleton width={250} />
      </h1>
      <p className="mb-6 text-gray-600">
        <Skeleton count={2} />
      </p>

      <form className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full">
            <Skeleton height={20} width={100} className="mb-2" />
            <Skeleton height={40} />
          </div>
          <div className="flex flex-col w-full">
            <Skeleton height={20} width={100} className="mb-2" />
            <Skeleton height={40} />
          </div>
        </div>

        <div className="flex flex-col">
          <Skeleton height={20} width={100} className="mb-2" />
          <Skeleton height={40} />
        </div>

        <div className="flex flex-col">
          <Skeleton height={20} width={100} className="mb-2" />
          <Skeleton height={40} />
        </div>

        <div className="flex flex-col">
          <Skeleton height={20} width={100} className="mb-2" />
          <Skeleton height={100} />
        </div>

        <Skeleton height={50} borderRadius={8} />
      </form>
    </div>
  );
};

export default ContactFormSkeleton;
