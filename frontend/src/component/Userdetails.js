import React, { useState, useEffect,useContext } from 'react';
import "./bootstrap.min.css";
import "./style.css";
import Timeline from './Timeline';
import ProjectContext from '../context/Contexts';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { jwtDecode } from 'jwt-decode';
const userinfo = jwtDecode(localStorage.getItem("token"));
const userishod=userinfo.found.role==="HOD"?true:null

export default  function UserDetailsPage(){
  
  const navigate = useNavigate()
  const {
    IndividualFormData,handleApproval,handleRejection
  } = useContext(ProjectContext);
  
  console.log(IndividualFormData);
  var lvl1form=IndividualFormData.Level1Forms;
  console.log(lvl1form);
  const initialFormData = {
    Department: lvl1form[0].Department,
    SendTo: lvl1form[0].Role,
    Name: 'John Doe',
  };

  // Placeholder data for the items table, replace with actual data from your backend
  const initialItems = IndividualFormData.formitems;
  // const initialItems = [
  //   { name: 'Item1', quantity: 2, price: 10, totalCost: 20 },
  //   { name: 'Item2', quantity: 1, price: 15, totalCost: 15 },
  // ];
  
  

  

  return (
    <>
        <Navbar></Navbar>
    <div className="container mt-5 mb-5 p-3 border border-dark border-3">
      <div className="text-center pt-5">
        {/* <img src={logo} alt="network-logo" width="72" height="72" /> */}
        <h2>ADMINISTRATIVE AND FINANCIAL APPROVAL </h2>
        <p>
          Administrative approval and financial approval may kindly be accorded for the purchase of the following equipment / items.
        </p>
      </div>

      <div className="card">
        <div className="card-body table-responsive">
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="department" className="text-dark font-weight-bold form-label">Department Of</label>
                <input type="text" id="department" className="form-control" value={initialFormData.Department} readOnly />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="sendTo" className="text-dark font-weight-bold form-label">Send To</label>
                <input type="text" id="sendTo" className="form-control" value={initialFormData.SendTo} readOnly />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="name" className="text-dark font-weight-bold form-label">Name</label>
              <input type="text" id="name" className="form-control" value={initialFormData.Name} readOnly />
            </div>

            <table className='table table-bordered m-1 p-1'>
              <thead>
                <tr className="text-center">
                  <th className="m-1">SNO.</th>
                  <th className="m-1">Item Name</th>
                  <th className="m-1">Quantity</th>
                  <th className="m-1">Price</th>
                  <th className="m-1">Total Cost</th>
                  <th className="m-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                {initialItems.map((item, index) => (
                  <tr key={index}>
                    <td className="table-warning">{index + 1}</td>
                    <td className="table-warning">
                      <div className="form-floating">
                        <div className="form-group m-1">
                          <input
                            type="text"
                            value={item.Name}
                            readOnly
                          />
                        </div>
                      </div>
                    </td>
                    <td className="table-warning">
                      <div className="form-floating">
                        <div className="form-group m-1">
                          <input
                            type="number"
                            value={item.Quantity}
                            readOnly
                          />
                        </div>
                      </div>
                    </td>
                    <td className="table-warning">
                      <div className="form-floating">
                        <div className="form-group m-1">
                          <input
                            type="number"
                            value={item.Cost}
                            readOnly
                          />
                        </div>
                      </div>
                    </td>
                    <td className="table-warning">{item.Total}</td>
                    <td className="table-warning">
                      <div className="form-floating">
                        <div className="form-group m-1">
                          <button type="button" className='btn btn-danger' disabled>
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <hr />
            <div className="text-end">
              <strong>Total Amount: {initialItems.reduce((total, item) => total + item.Total, 0)}</strong>
            </div>
          </form>
        </div>
      </div>
      { userishod && <button className="btn btn-success" onClick={()=>{ return handleApproval(IndividualFormData.Level1Forms[0].FormId)}}>
      Approve
    </button>}
     { userishod && <button className="btn btn-danger" onClick={()=>{ return handleRejection(IndividualFormData.Level1Forms[0].FormId)}}>
               Reject
      </button>}
    </div>
    </>
  );
};

// export default Userdetails;
