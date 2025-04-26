import { Link } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';

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

const HomeBeliefText = () => {
  const { mode } = useThemeStore((state) => state);

  return (
    <div className={`${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen p-6`}>
      <div>
        <h1 className={`text-4xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          OUR BELIEFS
        </h1>
        <p className={`mt-4 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Rooted in faith, we stand on the core teachings of Christ.
        </p>
        <div className="mt-10">
          {beliefs.map((belief) => (
            <div key={belief.id} className="flex items-start gap-4 mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${mode === 'dark' ? 'bg-gray-800' : 'bg-black'}`}>
                {belief.id}
              </div>
              <p className={`text-lg ${mode === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>{belief.text}</p>
            </div>
          ))}
          <div className="flex flex-col items-start">
            <button className="py-4 px-8 border-2 justify-center items-center mt-4">
              <Link to="/">About us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBeliefText;
