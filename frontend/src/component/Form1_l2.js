import React, { useState } from 'react';
import "./bootstrap.min.css";
import logo from "../images/NITT_logo.jpeg";

function Form1_l2() {
    const [formData, setFormData] = useState({
        date: '',
        name: '',
        requirements: {
          teaching: false,
          research: false,
          office: false,
          institute: false,
        },
        itemTypes: {
          equipment: false,
          consumable: false,
          furniture: false,
          workOrder: false,
          amc: false,
        },
        availability: '', // New field for availability
      });
      const [rows, setRows] = useState([
        {
          sno: 1,
          equipment: '',
          itemQty: '',
          unitCost: '',
          taxesAndCharges: 0, // New field for taxes and charges
          totalCost: 0,
        },
      ]);

    const calculateTotalCost = () => {
        return rows.reduce((total, row) => total + parseFloat(row.totalCost || 0), 0);
    };

    const addRow = () => {
        const newRow = {
            sno: rows.length + 1,
            equipment: '',
            itemQty: '',
            unitCost: '',
            totalCost: 0,
        };
        setRows([...rows, newRow]);
    };

    const deleteRow = (index) => {
        if (rows.length === 1) {
            // Ensure at least one row exists
            return;
        }
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };

    const handleTableChange = (index, field, value) => {
        const updatedRows = [...rows];
        const newRow = { ...updatedRows[index], [field]: value };
    
        if (field === 'unitCost' || field === 'itemQty' || field === 'taxesAndCharges') {
          const unitCost = parseFloat(newRow.unitCost || 0);
          const itemQty = parseFloat(newRow.itemQty || 0);
          const taxesAndCharges = parseFloat(newRow.taxesAndCharges || 0);
          newRow.totalCost = unitCost * itemQty + (unitCost * itemQty * taxesAndCharges) / 100;
        }
    
        updatedRows[index] = newRow;
        setRows(updatedRows);
      };

    const total = calculateTotalCost();


    const handleInputChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? { ...formData[name], [e.target.id]: checked } : value,
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission with formData
    };

    return (
        <div>
            <div className='container mt-5 mb-5 p-3 border border-dark border-3'>

                <div className="text-center pt-5 ">
                    <img src={logo} alt="network-logo" width="72" height="72" />
                    <h2>ADMINISTRATIVE AND FINANCIAL APPROVAL </h2>
                    <p>
                        Administrative approval and financial approval may kindly be accorded for the purchase of following equipment / items.
                    </p>
                </div>
                <div className="card">
                    <div className="card-body table-responsive">
                        {/* <h5 className="card-title">Responsive Form</h5> */}
                        <form id='bookingForm' className="needs-validation" novalidate autocomplete="off" onSubmit={handleSubmit}>

                            <div className='row'>
                                <div class=" form-group col-md-6 ">
                                    <label for="inputState" class="text-dark font-weight-bold form-label">Department Of </label>
                                    <select id="inputState" class="border-dark rounded form-select ">
                                        <option >Computer Application </option>
                                        <option> Computer Science</option>
                                        <option> Computer Science</option>
                                        <option> Computer Science</option>
                                        <option> Computer Science</option>
                                        <option> Computer Science</option>
                                        <option> Computer Science</option>
                                        <option> Computer Science</option>
                                        <option> Computer Science</option>

                                    </select>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label for="inputState" class="text-dark font-weight-bold form-label">Send To</label>
                                    <select id="inputState" class="border-dark rounded form-select ">
                                        <option >HOD</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">
                                    Date:
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name of the Laboratory / Office:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Nature of Requirement:</label>
                                {Object.keys(formData.requirements).map((requirement) => (
                                    <div className="form-check" key={requirement}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id={requirement}
                                            name="requirements"
                                            checked={formData.requirements[requirement]}
                                            onChange={handleInputChange}
                                        />
                                        <label className="form-check-label" htmlFor={requirement}>
                                            {requirement}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Nature of the Item:</label>
                                {Object.keys(formData.itemTypes).map((itemType) => (
                                    <div className="form-check" key={itemType}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id={itemType}
                                            name="itemTypes"
                                            checked={formData.itemTypes[itemType]}
                                            onChange={handleInputChange}
                                        />
                                        <label className="form-check-label" htmlFor={itemType}>
                                            {itemType}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="mb-3">
            <label className="form-label">Availability of the item in the department:</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="available"
                name="availability"
                value="Available"
                checked={formData.availability === 'Available'}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="available">
                Available
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="notAvailable"
                name="availability"
                value="Not available"
                checked={formData.availability === 'Not available'}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="notAvailable">
                Not available
              </label>
            </div>
          </div>

                            <table className='table table-bordered  m-1 p-1'>
                                <thead>
                                    <tr className="text-center">
                                        <th className="m-1">S. No.</th>
                                        <th className="m-1">Name of the Equipment</th>
                                        <th className="m-1">ItemQty</th>
                                        <th className="m-1">UnitCost</th>
                                        <th>Taxes and Charges (%)</th>
                                        <th className="m-1">Total Cost</th>
                                        <th className="m-1">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={index}>
                                            <td className="table-warning">{row.sno}</td>
                                            <td className="table-warning">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={row.equipment}
                                                    onChange={(e) => handleTableChange(index, 'equipment', e.target.value)}
                                                />
                                            </td>
                                            <td className="table-warning">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={row.itemQty}
                                                    onChange={(e) => handleTableChange(index, 'itemQty', e.target.value)}
                                                />
                                            </td>
                                            <td className="table-warning">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={row.unitCost}
                                                    onChange={(e) => handleTableChange(index, 'unitCost', e.target.value)}
                                                />
                                            </td>
                                            <td className="table-warning">
                                                <input
                                                type="number"
                                                className="form-control"
                                                value={row.taxesAndCharges}
                                                onChange={(e) => handleTableChange(index, 'taxesAndCharges', e.target.value)}
                                                />
                                            </td>
                                            <td className="table-warning">{row.totalCost}</td>
                                            <td className="table-warning">
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteRow(index)}
                                                    disabled={rows.length === 1}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p>Total: {total}</p>
                            <button className="btn btn-success" onClick={addRow}>
                                Add Row
                            </button>
                            <hr/>
                           

                            <button type="submit" className="btn btn-success">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form1_l2;
