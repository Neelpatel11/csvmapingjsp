import React from 'react';
import { useUser } from '../../context/UserContext';
import Papa from 'papaparse';

const UserDetailsPage = () => {
  const { users } = useUser();

  const downloadCSV = () => {
    const csvData = Papa.unparse(users);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'user_details.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Details</h2>
      {users.length > 0 ? (
        <div>
          <table className="scrollable-tbody" border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={downloadCSV} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Download as CSV
          </button>
        </div>
      ) : (
        <p>No user details available.</p>
      )}
    </div>
  );
};

export default UserDetailsPage;
