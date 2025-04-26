import { Link } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore'; // Make sure the path is correct

interface Belief {
  id: number;
  text: string;
}

const beliefs: Belief[] = [
  { id: 1, text: 'We believe in the power of prayer.' },
  { id: 2, text: 'We believe in the importance of community.' },
  { id: 3, text: 'We believe in the teachings of Jesus Christ.' },
  { id: 4, text: 'We believe in the importance of love and compassion.' },
  { id: 5, text: 'We believe in the significance of faith in our lives.' },
  { id: 6, text: 'We believe in the importance of service to others.' },
];

const HomeLeadPastorText = () => {
  const { mode } = useThemeStore((state) => state); // Retrieve the current theme mode from the store

  return (
    <div className={`${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} p-4`}>
      <p className={`mt-4 ${mode === 'dark' ? 'text-white' : 'text-gray-600'}`}>
        Rooted in faith, we stand on the core teachings of Christ.
      </p>
      <div className="mt-10">
        {beliefs.map((belief) => (
          <div key={belief.id} className="flex items-start gap-4 mb-4">
            <div className={`${mode === 'dark' ? 'bg-white' : 'bg-black'} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold`}>
              {belief.id}
            </div>
            <p className={`text-lg ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>{belief.text}</p>
          </div>
        ))}
        <div className="flex flex-col items-start">
          <button className="py-4 px-8 border-2 justify-center items-center mt-4">
            <Link to="/">About us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLeadPastorText;
