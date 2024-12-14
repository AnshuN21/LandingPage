/* eslint-disable no-unused-vars */
// import React from 'react';
// import ProjectManagement from './ProjectsManagement';
// import ContactFormDetails from './ContactFormDetails';
// import ClientsManagement from './ClientsManagement';
// import SubscribedUsers from './SubscribedUsers';


// const AdminPanel = () => {
//   return (
//     <div className="p-4">
      
//       <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
//       <ProjectManagement />
//       <ClientsManagement />
//       <ContactFormDetails />
//       <SubscribedUsers />
//     </div>
//   );
// };

// export default AdminPanel;

import React, { useState, useEffect } from "react";
import ProjectsAdmin from "./ProjectsAdmin";
import ContactForm from "../ContactForm";
import ContactFormDetails from "./ContactFormDetails";

const AdminPanel = () => {
  const [clients, setClients] = useState([]);
  const [footer, setFooter] = useState({});
  const [newClient, setNewClient] = useState({
    image: "",
    description: "",
    name: "",
    designation: "",
  });

  // Fetch data on load
  useEffect(() => {
    fetchClients();
    fetchFooter();
  }, []);

  const fetchClients = async () => {
    const response = await fetch("http://localhost:5000/happyClients");
    const data = await response.json();
    setClients(data);
  };

  const fetchFooter = async () => {
    const response = await fetch("http://localhost:5000/footer");
    const data = await response.json();
    setFooter(data);
  };

  // Add new client
  const handleAddClient = async () => {
    await fetch("http://localhost:5000/happyClients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClient),
    });
    fetchClients(); // Refresh client list
    setNewClient({ image: "", description: "", name: "", designation: "" });
  };

  // Update footer text
  const handleFooterUpdate = async () => {
    await fetch("http://localhost:5000/footer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(footer),
    });
    fetchFooter();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* Happy Clients Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Happy Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client) => (
            <div key={client.id} className="border p-4 rounded shadow">
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <p>{client.description}</p>
              <h4 className="font-bold">{client.name}</h4>
              <p className="text-sm text-gray-500">{client.designation}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Add New Client</h3>
          <input
            type="text"
            placeholder="Image URL"
            value={newClient.image}
            onChange={(e) => setNewClient({ ...newClient, image: e.target.value })}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={newClient.description}
            onChange={(e) =>
              setNewClient({ ...newClient, description: e.target.value })
            }
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Name"
            value={newClient.name}
            onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Designation"
            value={newClient.designation}
            onChange={(e) =>
              setNewClient({ ...newClient, designation: e.target.value })
            }
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={handleAddClient}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Client
          </button>
        </div>
      </div>

      <ProjectsAdmin />
      
    </div>
  );
};

export default AdminPanel;

