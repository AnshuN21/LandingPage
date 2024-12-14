/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";

// const HappyClients = () => {
//   const [clients, setClients] = useState([]);

//   useEffect(() => {
//     const dummyClients = [
//       {
//         image: "/assets/Ellipse 28.svg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         name: "Rowhan Smith",
//         designation: "CEO, Foreclosure",
//       },
//       {
//         image: "/assets/Ellipse 29.svg",
//         description: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
//         name: "Shipra Kayak",
//         designation: "Brand Designer",
//       },
//       {
//         image:"/assets/Ellipse 31.svg",
//         description: "Ut enim ad minim veniam, quis nostrud exercitation.",
//         name: "John Lepore",
//         designation: "CEO, Foreclosure",
//       },
//       {
//         image: "/assets/Ellipse 33.svg",
//         description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
//         name: "Marry Freeman",
//         designation: "Marketing Manager at MixIt",
//       },
//       {
//         image: "/assets/Ellipse 35.svg",
//         description: "Excepteur sint occaecat cupidatat non proident.",
//         name: "Lucy",
//         designation: "Sales Rep at Alibaba",
//       },
//     ];
//     setClients(dummyClients);
//   }, []);
  

//   return (
//     <section id="3" className="py-12 bg-gray-50">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-8">Happy Clients</h2>
//         <div className="flex flex-wrap justify-center gap-6">
//           {clients.map((client, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg p-6 w-64 text-center transition-transform transform hover:scale-105"
//             >
//               <img
//                 src={client.image}
//                 alt={client.name}
//                 className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
//               />
//               <p className="text-sm text-gray-600 mb-4">{client.description}</p>
//               <h4 className="text-lg font-semibold text-blue-600">{client.name}</h4>
//               <p className="text-sm text-gray-500">{client.designation}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HappyClients;


import React, { useState, useEffect } from "react";

const HappyClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/happyclients");
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error("Error fetching happy clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Happy Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-600">{client.name}</h3>
              <p className="text-sm text-gray-500">{client.designation}</p>
              <p className="text-gray-700 mt-2">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
