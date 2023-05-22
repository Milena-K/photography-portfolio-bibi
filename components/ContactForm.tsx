import React, { FormEventHandler, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // event.preventDefault();
    const formParams = {
      name: first + ' ' + last,
      email,
      message,
    }
    // emailjs.send(г)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl bg-white">
      <div className="">
        <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
        <div className="flex mb-8 ">
          <input
            type="text"
            id="firstName"
            required
            placeholder="First Name"
            value={first}
            onChange={(event) => setFirst(event.target.value)}
            className="focus:border focus:border-black appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            required
            value={last}
            onChange={(event) => setLast(event.target.value)}
            className="focus:border focus:border-black appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="mb-8">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
          className="focus:border focus:border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea
          id="message"
          value={message}
          required
          onChange={(event) => setMessage(event.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={5}
        />
      </div>
      <div className="flex text-center">
        <button
          type="submit"
          className="hover:bg-black hover:text-white bg-white text-black border-black border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
