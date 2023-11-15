import React, { useState, useEffect,useContext } from 'react';
import "./bootstrap.min.css";
import "./style.css";
import Timeline from './Timeline';
import ProjectContext from '../context/Contexts';
import Navbar from './Navbar';
import Footer from './Footer';
export default function Hod_Home() {
  const {
    fetchHodData,
  } = useContext(ProjectContext);
  
//   const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    fetchHodData();
  }, []);
//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//     console.log(selectedUser);
//   };
//   const getStatus = (selectedUser) => {
//    if(selectedUser.Approved0 && selectedUser.Approved1)
//    return "Approved" 
//     return "Pending"; // Default to 'No Status' if status is not available
//   };
  const divStyle = {
    minHeight: '80vh',
  };

  return (
    <>
        <Navbar></Navbar>
    <div style={divStyle}>
      <div className='container mt-5 mb-5 p-3 border border-dark border-3'>
        <h1>Status</h1>
        <table className='table table-bordered m-1 p-1'>
          <thead>
            <tr>
              <th>File Number</th>
              <th>Form Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {formData.map((user) => (
              <tr key={user.File_no}>
                <td>{user.File_no}</td>
                <td>{user.Date}</td>
                <td>{getStatus(user)}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUserClick(user)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}  */}
          </tbody>
        </table>
        
        {/* {selectedUser && (
          <div className="mt-4">
            <h2>User Details</h2>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>File Number:</th>
                  <td>{selectedUser.File_no}</td>
                </tr>
                <tr>
                  <th>Form Name:</th>
                  <td>{selectedUser.Date}</td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td>{getStatus(selectedUser)}</td>
                </tr>
                <tr>
                  <th>View Timeline:</th>
                  <td>
                    <Timeline data={selectedUser} />
                  </td>
                </tr>
                {/* Add more details here */}
              {/* </tbody>
            </table>
          </div>
        )} 
     */}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}