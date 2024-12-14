/* eslint-disable no-unused-vars */
// import React from 'react';

// const projects = [
//   {
//     title: 'Consultation',
//     description: 'Project details - benefits',
//     image: '/assets/pexels-brett-sayles-2881232.svg', 
//   },
//   {
//     title: 'Design',
//     description: 'Project details - benefits',
//     image: '/assets/pexels-brett-sayles-2881232-1.svg',
//   },
//   {
//     title: 'Marketing & Design',
//     description: 'Project details - benefits',
//     image:'/assets/pexels-brett-sayles-2881232-2.svg',
//   },
//   {
//     title: 'Con. & Marketing',
//     description: 'Project details - benefits',
//     image: '/assets/pexels-brett-sayles-2881232-3.svg',
//   },
//   {
//     title: 'Consultation',
//     description: 'Project details - benefits',
//     image: '/assets/pexels-fauxels-3182834.svg',
//   },
// ];

// const ProjectsSection = () => {
//   return (
//     <div id='2' className="bg-blue-50 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-blue-600">Our Projects</h2>
//           <p className="mt-2 text-gray-600">
//             We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
//                 <p className="text-gray-600 mt-2">{project.description}</p>
//                 <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md">
//                   See More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsSection;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects'); // Endpoint to fetch projects from backend
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id='2' className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Our Projects</h2>
      <p className="text-center text-gray-600 mb-8">
        We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <button className="bg-orange-500 text-white py-2 px-8 rounded hover:bg-orange-600 transition">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

