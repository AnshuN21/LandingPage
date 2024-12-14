/* eslint-disable no-unused-vars */
import React from 'react'
import ContactForm from './ContactForm';

const Hero = () => {

  // const myStyle = {
  //   backgroundImage:
  //       "url('https://images.pexels.com/photos/7578901/pexels-photo-7578901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
  //       "url('/assets/heroimage.jpg')"
  //   ,
  //   height: "100vh",
  //   marginTop: "-70px",
  //   fontSize: "50px",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
// };

  return (
     <>
    <div style={
      {
        backgroundImage: `url('/assets/heroimage.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    }
    className='bg-white'>
         
         <div className='flex justify-between '>

          <div className='mt-56 ml-24'>

           <h1 className='text-white text-7xl  font-bold'>Consultation,</h1>
           <h1 className='text-white text-7xl font-bold '>Design</h1>
           <h1 className='text-white text-7xl  font-bold'>& Marketing</h1>
           
           </div>
          <ContactForm />
           
           


          </div>
         
          

    </div>
    </>
  )
}

export default Hero
