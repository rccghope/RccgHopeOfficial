import { useThemeStore } from '../store/themeStore';
import type { ThemeState } from '../store/themeStore';
import img27 from '../assets/img27.png';
import img30 from '../assets/img30.png';

interface Image {
  id: number;
  src: string;
  alt: string;
  name: string;
}

const images: Image[] = [
  {
    id: 1,
    src: img27,
    alt: 'img1',
    name: 'img1',
  },
  {
    id: 2,
    src: img30,
    alt: 'img2',
    name: 'img2',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1pbmlzdHJ5fGdvbGR8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
    alt: 'img3',
    name: 'img3',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1pbmlzdHJ5fGdvbGR8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
    alt: 'img4',
    name: 'img4',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1pbmlzdHJ5fGdvbGR8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
    alt: 'img5',
    name: 'img5',
  },
];
const HomeConnectionImages = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 ${
        mode === 'dark' ? 'bg-black' : 'bg-white'
      }`}
    >
      {images.map((image) => (
        <div key={image.id} className="relative group">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105"
          />
          <h1
            className={`text-center font-bold mt-2 mb-4 ${
              mode === 'dark' ? 'text-white' : 'text-black'
            }`}
          >
            {image.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default HomeConnectionImages;
