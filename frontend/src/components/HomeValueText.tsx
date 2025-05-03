import { Link } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';
import type { ThemeState } from '../store/themeStore'; 
import plus from '../assets/plus.png'

interface Value {
  id: number;
  text: string;
  img:string;
  
}

const value: Value[] = [
  { id: 1, img:plus, text: 'We believe in the power of prayer.' },
  { id: 2, img:plus, text: 'We believe in the importance of community.' },
  { id: 3, img:plus, text: 'We believe in the teachings of Jesus Christ.' },
  { id: 4, img:plus, text: 'We believe in the importance of love and compassion.' },
  { id: 5, img:plus, text: 'We believe in the significance of faith in our lives.' },
  { id: 6, img:plus, text: 'We believe in the importance of service to others.' },
];

const HomeValueText = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);


  return (
    <div className={`${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen p-6`}>
      <div>
        <h1 className={`text-4xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          OUR VALUES
        </h1>
        <p className={`mt-4 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Rooted in faith, we stand on the core teachings of Christ.
        </p>
        <div className="mt-10">
          {value.map((value) => (
            <div key={value.id} className="flex items-start gap-4 mb-4 border-t-1 py-4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                  mode === 'dark' ? 'bg-gray-800' : ''
                }`}>
                 <img src={value.img} alt="" width={10} />
              </div>
              <p className={`text-lg ${mode === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                {value.text}
              </p>
            </div>
          ))}
          <hr/>
          <div className="flex flex-col items-start">
            <button className={`py-4 px-8 border-2 justify-center items-center mt-4   ${mode === 'dark' ? 'bg-white text-black' : 'bg-[#1D1E4F] text-white'}`}>
              <Link to="/">About us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeValueText;
