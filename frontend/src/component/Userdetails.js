import React from 'react';

const UserDetailsPage = ({ selectedUser }) => {
  const history = ;

  const handleApproval = () => {
    
    
  };

  const handleRejection = () => {
    
    
  };

  return (
    <div>
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
            <td>{selectedUser.}</td>
          </tr>
          {/* Add more details as needed */}
        </tbody>
      </table>

      {/* Buttons for approval and rejection */}
      <button className="btn btn-success" onClick={handleApproval}>
        Approve
      </button>
      <button className="btn btn-danger" onClick={handleRejection}>
        Reject
      </button>
    </div>
  );
};
export default Userdetails;
