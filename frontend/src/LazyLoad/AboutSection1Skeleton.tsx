import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutSection1Skeleton = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-7 w-auto px-4">
        <Skeleton count={4} width={800} height={20} />
      </div>
    </div>
  );
};

export default AboutSection1Skeleton;
