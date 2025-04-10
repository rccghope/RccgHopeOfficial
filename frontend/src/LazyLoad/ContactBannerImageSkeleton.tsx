import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import the skeleton CSS

const ContactBannerImageSkeleton = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="rounded-lg shadow-lg px-2 py-2 flex flex-col items-center text-center bg-gray-300"
        >
          {/* Skeleton loader for image */}
          <Skeleton height={288} width="100%" className="mb-4" />

          {/* Skeleton loader for title */}
          <Skeleton height={20} width="80%" className="mb-2" />

          {/* Skeleton loader for description */}
          <Skeleton height={15} width="60%" />
        </div>
      ))}
    </div>
  );
};

export default ContactBannerImageSkeleton;
