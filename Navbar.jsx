/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {

  return (
    <>
    <div className='mb-2'>
    <nav className='bg-white text-black'>
        {/* <a className='text-2xl text-blue-500 ml-28 mr-26'>
         </a> */}
        <div className='flex justify-between'>
      <div>
         <img className='w-40 ml-14 mt-7' src='\assets\logo.svg'></img> </div>
         <div>
        <a href='#' className='text-2xl font-sans hover:underline  m-8 ml-8 text-blue-700  font-bold'> Home </a>
        <a href='#1' className='text-2xl font-sans hover:underline m-8 font-bold'>Services</a>
        <a href='#2' className='text-2xl font-sans hover:underline gap-3 m-8 font-bold'>About Projects</a>
        <a href='#3' className='text-2xl font-sans hover:underline gap-3 m-8 font-bold'> Testimonials</a>
        <a href="/admin" className="text-blue-400 underline">Admin Panel</a>
        <button className='bg-orange-600 text-2xl font-bold text-white m-8 px-4 py-1 rounded-lg'> <a href='#4'>Contact</a></button>
        </div>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar
