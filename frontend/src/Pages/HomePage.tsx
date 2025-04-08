import HomeSection1 from '../components/HomeSection1';
import Slider from '../components/Slider';

const HomePage = () => {
  return (
    <div>
      <Slider />
      <div className=" px-4 md:px-20">
        <HomeSection1 />
      </div>
    </div>
  );
};

export default HomePage;
