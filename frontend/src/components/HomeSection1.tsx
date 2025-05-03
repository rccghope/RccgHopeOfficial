import img17 from '../assets/img17.jpg';
import img20 from '../assets/img20.jpg';
import img15 from '../assets/img15.jpg';

interface ImageItem {
  id: number;
  img: string;
}

const images: ImageItem[] = [
  { id: 1, img: img17 },
  { id: 2, img: img20 },
  { id: 3, img: img15 },
];

const HomeSection1: React.FC = () => {
  return (
    <div className="mt-10 w-full  flex flex-col lg:flex-row items-center justify-center gap-4">
      {images.map(({ id, img }) => (
        <div key={id} className="w-full lg:w-1/3 h-56 bg-gray-300">
          <img src={img} alt={`Image ${id}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default HomeSection1;
