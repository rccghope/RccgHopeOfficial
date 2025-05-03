
import { useThemeStore } from '../store/themeStore';
import type { ThemeState } from '../store/themeStore';

interface Belief {
  id: number;
  text: string;
}

const beliefs: Belief[] = [
  {
    id: 1,
    text: 'We believe in the power of prayer. We believe in the importance of service to others We believe in the significance of faith in our lives.',
  },
  {
    id: 2,
    text: 'We believe in the importance of community. We believe in the significance of faith in our lives. We believe in the significance of faith in our lives.',
  },
  {
    id: 3,
    text: 'We believe in the teachings of Jesus Christ. We believe in the significance of faith in our lives. We believe in the significance of faith in our lives.',
  },
];

const HomeLeadPastorText = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);

  return (
    <div
      className={`${
        mode === 'dark' ? 'bg-black text-white' : ' text-black'
      } p-4`}
    >
      <h1
        className={`mt-4 text-3xl font-bold ${
          mode === 'dark' ? 'text-white' : 'text-black'
        }`}
      >
        LOREM IPSUM
      </h1>
      <div className="mt-10">
        {beliefs.map((belief) => (
          <div key={belief.id} className="flex items-start gap-4 mb-4">
            <p
              className={`text-lg ${
                mode === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              {belief.text}
            </p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default HomeLeadPastorText;
