import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ContactBannerImageSkeleton = () => {
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <Skeleton height={250} className="rounded-md mb-4" />
      <Skeleton height={30} width={`60%`} className="mb-2" />
      <Skeleton height={20} width={`40%`} />
    </div>
  );
};

export default ContactBannerImageSkeleton;
