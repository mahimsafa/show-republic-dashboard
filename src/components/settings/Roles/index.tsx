import React from 'react';
import './style.css';
import { FaUser, FaTimes, FaPlus, FaPen } from 'react-icons/fa';
import Searchbar from '@/components/Searchbar';

const RolesSettings = () => {
  const roles = [
    { name: 'Owner', users: 1, permissions: 'All' },
    { name: 'Admin', users: 3, permissions: 20 },
    { name: 'Member', users: 30, permissions: 15 },
    { name: 'Guest', users: 2, permissions: 5 },
  ];

  return (
    <div className="roles-page">
      <div className="header">
        <h2>Roles</h2>
        <Searchbar/>
        <button className="add-role-btn">
          <FaPlus className="icon" /> Add Custom Role
        </button>
      </div>

      <table className="roles-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Users</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td className="role"><FaUser className="role-icon" /> {role.name}</td>
              <td>{role.users}</td>
              <td>{role.permissions}</td>
              <td className="actions">
                <FaPen className="edit-icon" />
                <FaTimes className="delete-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RolesSettings;
