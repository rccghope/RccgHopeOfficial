
import { Link } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';
import type { ThemeState } from '../store/themeStore';

const OnlineSection2 = () => {
  const { mode } = useThemeStore((state: ThemeState) => state);
  return (
    <div
      className={`${
        mode === 'light' ? '' : 'bg-gray-900'
      } transition duration-300`}
    >
      <div className="flex flex-col justify-center items-center py-4 px-4 mt-30">
        <h1
          className={`text-4xl font-bold ${
            mode === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          How You Give
        </h1>

        <p
          className={`mt-5 text-2xl text-center font-semibold ${
            mode === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          For your tithes and offerings, kindly transfer to the account below:
        </p>
        <p
          className={`mt-5  text-center  ${
            mode === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          Account Name: [Church Name]
        </p>
        <p
          className={`mt-5  text-center  ${
            mode === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          Bank: [Bank Name]
        </p>
        <p
          className={`mt-5  text-center  ${
            mode === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          Account Number: [0000000000]
        </p>
        <p
          className={`mt-5  text-center text-[20px] font-semibold italic  ${
            mode === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          Click the button to give to missions, building fund, or other special
          causes.
        </p>
      </div>

      <div className="mt-10 mb-20">
        <div className="flex flex-row md:flex-row justify-center item-center gap-2">
          <Link to="bankTransfer">
            <div
              className={`${
                mode === 'light' ? 'bg-gray-300' : 'bg-gray-700'
              } flex flex-col justify-center items-center py-5 px-10 rounded-lg shadow-md`}
            >
              <h1
                className={`md:text-2xl font-bold text-center ${
                  mode === 'light' ? 'text-black' : 'text-white'
                }`}
              >
                Make Donation
              </h1>
            </div>
          </Link>
        </div>

        <h1
          className={`text-center mt-10 italic font-bold ${
            mode === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          Every option is secure and fast. You’ll receive a confirmation once
          your giving is successful.
        </h1>
      </div>
    </div>
  );
};

export default OnlineSection2;
