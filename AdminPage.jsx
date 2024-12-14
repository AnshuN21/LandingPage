/* eslint-disable no-unused-vars */
import React from 'react';
import AdminPanel from '../components/Admin/AdminPanel';

const AdminPage = () => {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>
      <AdminPanel />
    </div>
  );
};

export default AdminPage;