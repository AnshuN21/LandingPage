/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }

    fetch('http://localhost:5000/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessage('Thank you for subscribing!');
          setEmail(''); // Clear the input field
        } else {
          setMessage('Subscription failed. Try again later.');
        }
      })
      .catch(() => {
        setMessage('An error occurred. Please try again.');
      });
  };

  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubscribe} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded w-80 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
    </section>
  );
};

export default Newsletter;
