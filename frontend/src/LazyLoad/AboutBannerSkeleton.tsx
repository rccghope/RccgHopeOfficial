import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutBannerSkeleton = () => {
  return (
    <section className="flex flex-col w-full h-[30rem] justify-center items-center bg-gray-200 px-4 text-center">
      <Skeleton height={60} width={300} />
      <div className="mt-5">
        <Skeleton height={30} width={250} />
      </div>
    </section>
  );
};

export default AboutBannerSkeleton;
