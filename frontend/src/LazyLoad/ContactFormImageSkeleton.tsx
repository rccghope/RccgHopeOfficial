import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import the skeleton CSS

const ContactFormImageSkeleton = () => {
  return (
    <div className='h-[400px]'>
      {/* Skeleton for the image */}
      <Skeleton height="100%" width="100%" className="rounded-md shadow-md" />
     
    </div>
  );
};

export default ContactFormImageSkeleton;
