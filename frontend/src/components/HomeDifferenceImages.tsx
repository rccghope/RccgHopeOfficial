import { useThemeStore } from '../store/themeStore'; // Ensure the path is correct

const can = [
  {
    id: 1,
    text: 'Volunteer',
    img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1pbmlzdHJ5fGdvbGR8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    text: 'Donate',
    img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1pbmlzdHJ5fGdvbGR8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    text: 'Participate',
    img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1pbmlzdHJ5fGdvbGR8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 4,
    text: 'Connect',
    img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1pbmlzdHJ5fGdvbGR8ZW58MHx8fHwxNjg3NTY5NzA0&ixlib=rb-4.0.3&q=80&w=1080',
  },
];

const HomeDifferenceImages = () => {
  const { mode } = useThemeStore((state) => state); // Retrieve the current theme mode

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 mb-20 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
      {can.map((item) => (
        <div key={item.id} className="relative group">
          <img
            src={item.img}
            alt={item.text}
            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 transform group-hover:scale-105"
          />
          <h1 className={`mt-4 text-center font-bold mb-4 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>{item.text}</h1>
        </div>
      ))}
    </div>
  );
};

export default HomeDifferenceImages;
