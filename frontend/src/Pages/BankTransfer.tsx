import { useState } from 'react';
import { useThemeStore } from '../store/themeStore'; // import the theme store

const BankTransfer = () => {
  const { mode } = useThemeStore((state) => state); // get the current mode

  const [formData, setFormData] = useState({
    firstName: '',
    purpose: '',
    amount: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your message sending logic here
  };

  return (
    <div className={`${mode === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} transition duration-300 min-h-screen `}>
      <div className="flex flex-col justify-center md:mx-[20rem] py-[8rem] md:max-w-[80%] px-4">
        <div>
          <h1 className="text-4xl font-bold text-center">Pay With Transfer</h1>
          <p className="text-2xl font-semibold mt-20 mb-5">Who's Giving?</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="text-sm font-bold">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className={`border rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400 ${
                mode === 'light' ? 'bg-white border-gray-300 text-black' : 'bg-gray-800 border-gray-600 text-white'
              }`}
            />
          </div>

          {/* Purpose */}
          <div className="flex flex-col w-full mt-4">
            <label htmlFor="purpose" className="text-sm font-bold">Purpose</label>
            <input
              id="purpose"
              name="purpose"
              type="text"
              placeholder="Enter the purpose"
              value={formData.purpose}
              onChange={handleChange}
              className={`border rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400 ${
                mode === 'light' ? 'bg-white border-gray-300 text-black' : 'bg-gray-800 border-gray-600 text-white'
              }`}
            />
          </div>

          {/* Amount */}
          <div className="flex flex-col mt-4">
            <label htmlFor="amount" className="text-sm font-bold">Amount</label>
            <input
              id="amount"
              name="amount"
              type="number"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className={`border rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400 ${
                mode === 'light' ? 'bg-white border-gray-300 text-black' : 'bg-gray-800 border-gray-600 text-white'
              }`}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mt-4">
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`border rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400 ${
                mode === 'light' ? 'bg-white border-gray-300 text-black' : 'bg-gray-800 border-gray-600 text-white'
              }`}
            />
          </div>

          {/* Payment Info & Submit */}
          <div className="text-center mt-10">
            <h1 className="text-[20px] font-bold">
              Kindly transfer your desired amount to the account below:
            </h1>
            <p className="text-[20px] font-semibold mt-5">Account Name: [Church Name]</p>
            <p className="text-[20px] font-semibold mt-5">Bank: [Bank Name]</p>
            <p className="text-[20px] font-semibold mt-5">Account Number: [0000000000]</p>

            <button
              type="submit"
              className={`w-1/2 font-bold py-3 mt-10 rounded-md hover:opacity-90 transition duration-300 ${
                mode === 'light' ? 'bg-gray-300 text-black hover:bg-gray-400' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              Send Message
            </button>

            <h1 className="text-[20px] font-semibold mt-5">
              Change Payment Method
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankTransfer;
