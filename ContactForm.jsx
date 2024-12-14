/* eslint-disable no-unused-vars */
import React from 'react'

const ContactForm = () => {
  return (
    <div className='mr-40'>
     <div className="flex justify-center items-center h-screen">
      <div className=" bg-customBlue bg-opacity-85 text-white rounded-lg p-8 w-80 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Get a Free Consultation</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 p-2 border border-white rounded-lg  bg-inherit  text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full mb-4 p-2 border border-white rounded-lg bg-inherit text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full mb-4 p-2 border border-white rounded-lg bg-inherit text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Area, City"
            className="w-full mb-6 p-2 border border-white rounded-lg bg-inherit text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Get Quick Quote
          </button>
        </form>
      </div>
    </div>
      
    </div>
  )
}

export default ContactForm





