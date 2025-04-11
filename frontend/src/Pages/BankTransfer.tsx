import { useState } from 'react';

const BankTransfer = () => {
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
    // You can add your message sending logic here
  };

  return (
    <div>
      <div className="bg-white flex flex-col justify-center md:mx-[20rem] my-[8rem] md:max-w-[80%] px-4 py-2">
        <div>
          <h1 className="text-4xl font-bold text-center">Pay With Transfer</h1>
          <p className="text-2xl font-semibold mt-20 mb-5">Who's Giving?</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="text-sm font-bold">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-white border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col w-full mt-4">
            <label htmlFor="purpose" className="text-sm font-bold">
              Purpose
            </label>
            <input
              id="purpose"
              name="purpose"
              type="text"
              placeholder="Enter the purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="bg-white border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="amount" className="text-sm font-bold">
              Amount
            </label>
            <input
              id="amount"
              name="amount"
              type="number"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="bg-white border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="text-center mt-10">
            <h1 className="text-[20px] font-bold">
              Kindly transfer your desired amount to the account below:
            </h1>
            <p className="text-[20px] font-semibold mt-5">
              Account Name: [Church Name]
            </p>
            <p className="text-[20px] font-semibold mt-5">Bank: [Bank Name]</p>
            <p className="text-[20px] font-semibold mt-5">
              Account Number: [0000000000]
            </p>

            <button
              type="submit"
              className="w-1/2 bg-gray-300 text-white font-bold py-3 mt-10 rounded-md hover:bg-gray-400 transition duration-300"
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
