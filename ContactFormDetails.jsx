/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactFormDetails = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects').then((response) => setProjects(response.data));
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">ContactFormDetails</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.name} - {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactFormDetails;
