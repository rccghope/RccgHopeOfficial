import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection5Skeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="w-full h-64">
          <Skeleton
            height="100%"
            borderRadius="0.5rem"
            style={{ lineHeight: 2 }}
          />
        </div>
      ))}
    </div>
  );
};

export default AboutSection5Skeleton;
