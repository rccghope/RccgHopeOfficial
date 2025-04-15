import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import the skeleton CSS

const ContactFormPageSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        {/* Skeleton for the title */}
        <Skeleton height={30} width="40%" className="mb-2" />
        
        {/* Skeleton for the description */}
        <Skeleton height={20} width="80%" />
      </div>

      <form className="space-y-6">
        {/* Skeleton for First Name and Last Name Inputs */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full">
            <Skeleton height={40} className="mb-4" />
          </div>
          <div className="flex flex-col w-full">
            <Skeleton height={40} className="mb-4" />
          </div>
        </div>

        {/* Skeleton for Phone Input */}
        <div className="flex flex-col">
          <Skeleton height={40} className="mb-4" />
        </div>

        {/* Skeleton for Email Input */}
        <div className="flex flex-col">
          <Skeleton height={40} className="mb-4" />
        </div>

        {/* Skeleton for Message Textarea */}
        <div className="flex flex-col">
          <Skeleton height={120} className="mb-4" />
        </div>

        {/* Skeleton for Button */}
        <Skeleton height={50} width="100%" />
      </form>
    </div>
  );
};

export default ContactFormPageSkeleton;
