import { CiBank } from 'react-icons/ci';

import { Link } from 'react-router-dom';
const OnlineSection2 = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-4 mt-20">
        <h1 className="text-4xl font-bold">How You Give</h1>
        <p className="mt-5 text-2xl text-center font-semibold">
          Choose the method that is most convenient for you:
        </p>
      </div>
      <div className=" mt-10 mb-20">
        <div className="flex flex-row md:flex-row justify-center item-center gap-2">
          <Link to="bankTransfer">
            <div className="bg-gray-300 flex flex-col justify-center items-center py-5 px-10">
              <CiBank className="text-2xl" />
              <h1 className="md:text-2xl mt-5 font-bold text-center">
                Bank Transfer{' '}
              </h1>
            </div>
          </Link>
        </div>
        <h1 className="text-center mt-10 italic font-bold">
          Every option is secure and fast. You’ll receive a confirmation once
          your giving is successful.
        </h1>
      </div>
    </div>
  );
};

export default OnlineSection2;
