import React, { useState, useEffect } from 'react';
import "./bootstrap.min.css";
import "./style.css";
import Timeline from './Timeline';

const usersData = [
  { id: 1, fileNumber: '001', formName: 'Form A', status: 'Pending' },
  { id: 2, fileNumber: '002', formName: 'Form B', status: 'Approved' },
  { id: 3, fileNumber: '003', formName: 'Form C', status: 'Rejected' },
];
const timelineData1 = [
  { title: 'Initialized By faculty', status: 'Processing' },
  { title: 'HOD Approval', status: 'Success' },
  { title: 'Dean Approval ', status: 'Pending' },
  // Add more data as needed
];
export default function Home() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [timelineData, setTimelineData] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);

    // Fetch data from the backend based on fileNumber
    // fetch(`your-backend-api-endpoint/${user.fileNumber}`)
    //   .then((response) => response.json())
    //   .then((data) => {
        setTimelineData(timelineData1);
      // })
      // .catch((error) => {
      //   console.error('Error fetching timeline data:', error);
      // });
  };

  const divStyle = {
    minHeight: '80vh',
  };

  return (
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
            {usersData.map((user) => (
              <tr key={user.id}>
                <td>{user.fileNumber}</td>
                <td>{user.formName}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUserClick(user)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {selectedUser && (
          <div className="mt-4">
            <h2>User Details</h2>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>File Number:</th>
                  <td>{selectedUser.fileNumber}</td>
                </tr>
                <tr>
                  <th>Form Name:</th>
                  <td>{selectedUser.formName}</td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td>{selectedUser.status}</td>
                </tr>
                <tr>
                  <th>View Timeline:</th>
                  <td>
                    <Timeline data={timelineData} />
                  </td>
                </tr>
                {/* Add more details here */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}



// import React, { useState } from 'react'
// import "./bootstrap.min.css";
// import "./style.css";
// const usersData = [
//     { id: 1, fileNumber: '001', formName: 'Form A', status: 'Pending' },
//     { id: 2, fileNumber: '002', formName: 'Form B', status: 'Approved' },
//     { id: 3, fileNumber: '003', formName: 'Form C', status: 'Rejected' },
//   ];
// export default function Home() {
//     const [selectedUser, setSelectedUser] = useState(null);
//   const handleUserClick = (user) => {
//     setSelectedUser(user);
//   };
//   const divStyle = {
//     minHeight: '80vh',
//   };
// return (
// <div style={divStyle}>
// <div className='container mt-5 mb-5 p-3 border border-dark border-3'>
//       <h1>Status</h1>
//       <table className='table table-bordered  m-1 p-1'>
//         <thead>
//           <tr>
//             <th>File Number</th>
//             <th>Form Name</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {usersData.map((user) => (
//             <tr key={user.id}>
//               <td>{user.fileNumber}</td>
//               <td>{user.formName}</td>
//               <td>{user.status}</td>
//               <td>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => handleUserClick(user)}
//                 >
//                   View Details
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedUser && (
//         <div className="mt-4">
//           <h2>User Details</h2>
//           <table className="table table-bordered">
//             <tbody>
//               <tr>
//                 <th>File Number:</th>
//                 <td>{selectedUser.fileNumber}</td>
//               </tr>
//               <tr>
//                 <th>Form Name:</th>
//                 <td>{selectedUser.formName}</td>
//               </tr>
//               <tr>
//                 <th>Status:</th>
//                 <td>{selectedUser.status}</td>
//               </tr>
//               {/* Add more details here */}
//             </tbody>
//           </table>
//         </div>
//       )}
//       </div>
//     </div>
//     )
// }
