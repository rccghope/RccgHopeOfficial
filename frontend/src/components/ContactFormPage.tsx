import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useThemeStore } from '../store/themeStore'; // Assuming a theme store

const ContactFormPage: React.FC = () => {
  const mode = useThemeStore((state) => state.mode);
 
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true); 

    emailjs
      .sendForm(
        'service_fgnjria',    
        'template_kwyj2i9',    
        formRef.current,
        {
          publicKey: '8aUqbtD1MX3g8QGJQ',
        }
      )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        });
        setLoading(false); 
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error('Error sending message:', error.message);
        } else {
          console.error('Unknown error sending message:', error);
        }
        setStatus('Failed to send message. Please try again later.');
        setLoading(false); 
      });
  };

  return (
    <div
      className={`${
        mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      } p-6 rounded-md shadow-md`}
    >
      <h1
        className={`text-3xl font-bold mb-2 ${
          mode === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
        }`}
      >
        Send Us a Message
      </h1>
      <p
        className={`text-gray-600 mb-6 ${
          mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        We're here to help. Fill out the form below and we'll get back to you as
        soon as possible.
      </p>

      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full">
            <label
              htmlFor="firstName"
              className={`text-sm font-semibold ${
                mode === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={` border ${
                mode === 'dark' ? 'border-gray-700' : 'border-gray-300'
              } rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400`}
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="lastName"
              className={`text-sm font-semibold ${
                mode === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={` border ${
                mode === 'dark' ? 'border-gray-700' : 'border-gray-300'
              } rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400`}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className={`text-sm font-semibold ${
              mode === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={` border ${
              mode === 'dark' ? 'border-gray-700' : 'border-gray-300'
            } rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400`}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className={`text-sm font-semibold ${
              mode === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`border ${
              mode === 'dark' ? 'border-gray-700' : 'border-gray-300'
            } rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400`}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className={`text-sm font-semibold ${
              mode === 'dark' ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={` border ${
              mode === 'dark' ? 'border-gray-700' : 'border-gray-300'
            } rounded-md py-3 px-3 h-36 outline-none resize-none focus:ring-2 focus:ring-green-400`}
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full ${
            mode === 'dark' ? 'bg-blue-600' : 'bg-blue-700'
          } text-white font-bold py-3 rounded-md hover:bg-gray-800 transition duration-300`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status && (
          <p
            className={`text-sm text-center mt-4 ${
              status.includes('Failed') ? 'text-red-500' : 'text-green-600'
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactFormPage;
