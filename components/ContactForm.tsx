import React, { LegacyRef, RefObject, SyntheticEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init('service_vi6q3nh');

interface FormEvent<T = Element> extends SyntheticEvent<T> {

}

interface IForm {
  name: string;
  email: string;
  message: string;
}


const ContactForm = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'' | 'sent' | 'error'>('');
  const form = useRef<HTMLFormElement>(null);

  const clearForm = () => {
    setFirst("")
    setLast("")
    setEmail("")
    setMessage("")
    setEmailStatus('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formParams = {
      message: 'Name: ' + first + ' ' + last + '\n' +
        'Email: ' + email +
        '\n Message: ' + message,
    }
    const email_service_id = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!;
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const email_public_key = process.env.NEXT_PUBLIC_EMAILJS_KEY!;
    emailjs.send(email_service_id, template_id, formParams, email_public_key)
      .then(() => {
        clearForm()
        setEmailStatus('sent');
      }, function (error) {
        setEmailStatus('error');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl bg-white" ref={form}>
      <div className="">
        <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
        <div className="flex mb-8 ">
          <input
            type="text"
            name="First Name"
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
            name="Last Name"
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
          name="Email"
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
          name="Message"
          id="message"
          value={message}
          required
          onChange={(event) => setMessage(event.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={5}
        />
      </div>
      <div className="flex text-center justify-between">
        <button
          type="submit"
          className="hover:bg-black hover:text-white bg-white text-black border-black border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
        {
          emailStatus == 'sent' ?
            (<p className="align-end pt-2 bg-black text-white px-4">Message sent.</p>) :
            emailStatus == 'error' ?
              (<p className='pt-2'> Something went wrong, please try again later. </p>) :
              (<></>)
        }

      </div>
    </form>
  );
};

export default ContactForm;
