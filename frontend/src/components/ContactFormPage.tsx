import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactFormPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_fgnjria',      // service ID 
        'template_kwyj2i9',     // real template ID
        formRef.current,
        {
          publicKey: '8aUqbtD1MX3g8QGJQ',  
        }
      )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        });
      })
      .catch(error => {
        setStatus(`Failed to send message: ${error.text}`);
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Send Us a Message</h1>
      <p className="text-gray-600 mb-6">
        We're here to help. Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="text-sm font-semibold">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="bg-white border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="lastName" className="text-sm font-semibold">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="bg-white border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 rounded-md py-3 px-3 h-36 outline-none resize-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-700 text-white font-bold py-3 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Send Message
        </button>

        {status && (
          <p className="text-sm text-center mt-4 text-green-600">{status}</p>
        )}
      </form>
    </div>
  );
};

export default ContactFormPage;



/*
import React, { useState } from 'react';

const ContactFormPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Send Us a Message</h1>
      <p className="text-gray-600 mb-6">
        We're here to help. Fill out the form below and we'll get back to you as
        soon as possible.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="text-sm font-semibold">
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
          <div className="flex flex-col w-full">
            <label htmlFor="lastName" className="text-sm font-semibold">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-white border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white border border-gray-300 rounded-md py-2 px-3 outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="flex flex-col">
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

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            className="bg-white border border-gray-300 rounded-md py-3 px-3 h-36 outline-none resize-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-300 text-white font-bold py-3 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactFormPage;

*/