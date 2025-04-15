import { Link } from 'react-router-dom';
interface Value {
  id: number;
  text: string;
}

const value: Value[] = [
  { id: 1, text: 'We believe in the power of prayer.' },
  { id: 2, text: 'We believe in the importance of community.' },
  { id: 3, text: 'We believe in the teachings of Jesus Christ.' },
  { id: 4, text: 'We believe in the importance of love and compassion.' },
  { id: 5, text: 'We believe in the significance of faith in our lives.' },
  { id: 6, text: 'We believe in the importance of service to others.' },
];
const HomeValueText = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">OUR VALUES</h1>
        <p className="mt-4 text-gray-600">
          Rooted in faith, we stand on the core teachings of Christ.
        </p>
        <div className="mt-10">
          {value.map((value) => (
            <div key={value.id} className="flex items-start gap-4 mb-4">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">
                {value.id}
              </div>
              <p className="text-lg text-gray-800">{value.text}</p>
            </div>
          ))}
          <div className="flex flex-col items-start">
            <button className=" py-4 px-8 border-2 justify-center items-center mt-4">
              <Link to="/">About us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeValueText;
