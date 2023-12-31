import React, { useState, useEffect,useContext } from 'react';
import "./bootstrap.min.css";
import "./style.css";
import Timeline from './Timeline';
import ProjectContext from '../context/Contexts';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const {
    fetchDataFromBackend,
    formData,
  } = useContext(ProjectContext);
  console.log(formData);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    fetchDataFromBackend();
  }, []);
  const handleUserClick = (user) => {
    setSelectedUser(user);
    console.log(selectedUser);
  };
  const navigate = useNavigate()
  const {
    fetchHodData,hodData,formdataforlevel1
  } = useContext(ProjectContext);
  
  const [selectedUser1, setSelectedUser1] = useState(null);
  useEffect(() => {
    fetchHodData();
    // fetchDataFromBackend();
  }, []);
  const handleUserClick1 = (user) => {
    setSelectedUser1(user);
    console.log(selectedUser.user.File_no);
    formdataforlevel1(selectedUser.File_no);
    console.log(selectedUser1);
    let timer = setTimeout(()=>{
        
      navigate('/UserDetails',{replace:true});
        clearTimeout(timer);
    }, 2000)
  };

  const getStatus = (selectedUser) => {
   if(selectedUser.Approved0 && selectedUser.Approved1)
   return "Approved" ;
  if(selectedUser.Rejected1 )
   return "Rejected" ;
   
    return "Pending"; // Default to 'No Status' if status is not available
  };
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
              <th>View Form</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((user) => (
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
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUserClick1(user)}
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
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    <Footer></Footer>
    </>
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
