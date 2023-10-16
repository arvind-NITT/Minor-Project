import React from 'react'
import "./bootstrap.min.css";
import logo from "../images/NITT_logo.jpeg";
import { useState } from 'react';

export default function Form() {
    const [items, setItems] = useState([
        { name: '', quantity: 0, price: 0, totalCost: 0 },
    ]);

    const handleItemChange = (index, key, value) => {
        const updatedItems = [...items];
        updatedItems[index][key] = value;
        updatedItems[index].totalCost = updatedItems[index].quantity * updatedItems[index].price;
        setItems(updatedItems);
    };

    const addNewItem = () => {
        setItems([...items, { name: '', quantity: 0, price: 0, totalCost: 0 }]);
    };

    const deleteItem = (index) => {
        if (items.length === 1) {
            // Don't delete the last item
            return;
        }
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };
    return (
        <>

        
        <div>
            <div className='container mt-5 mb-5 p-3 border border-dark border-3'>

                <div className="text-center pt-5 ">
                    <img src={logo} alt="network-logo" width="72" height="72" />
                    <h2>ADMINISTRATIVE AND FINANCIAL APPROVAL </h2>
                    <p>
                        Administrative approval and financial approval may kindly be accorded for the purchase of following equipment / items.
                    </p>
                </div>

                <div class="card ">
                    <div className="card-body table-responsive">
                        <form id="bookingForm" action="#" method="" class="needs-validation" novalidate autocomplete="off">
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
                            <div class="form-group">
                                <label for="inputName">Name</label>
                                <input type="text" class="form-control" id="inputName" name="name" placeholder="Your name" required />
                                <small class="form-text text-muted">Please fill your name</small>
                            </div>



                            <table className='table table-bordered  m-1 p-1'>
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
                                    {items.map((item, index) => (
                                        <tr key={index}>
                                            <td className="table-warning">{index + 1}</td>
                                            <td className="table-warning">
                                                <div className="form-floating">
                                                    <div class="form-group m-1">
                                                        <input
                                                            type="text"
                                                            value={item.name}
                                                            onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="table-warning">
                                                <div className="form-floating">
                                                    <div class="form-group m-1">
                                                        <input
                                                            type="number"
                                                            value={item.quantity}
                                                            onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="table-warning">
                                                <div className="form-floating">
                                                    <div className="form-group m-1">
                                                        <input
                                                            type="number"
                                                            value={item.price}
                                                            onChange={(e) => handleItemChange(index, 'price', parseFloat(e.target.value))}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="table-warning">{item.totalCost}</td>
                                            <td className="table-warning">
                                                <div className="form-floating">
                                                    <div class="form-group m-1">
                                                        <button className='btn btn-danger' onClick={() => deleteItem(index)} disabled={items.length === 1}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="btn btn-success" onClick={addNewItem}>Add Item</button>



                            <hr />




                            {/* <div class="form-group">
                                <label for="textAreaRemark">Notes</label>
                                <textarea class="form-control" name="remark" id="textAreaRemark" rows="2" placeholder="Tell us you want more..."></textarea>
                            </div> */}

                            <button class="btn btn-success btn-block col-lg-2" type="submit">Submit</button>

                        </form>

                    </div>
                </div>

            </div>
        </div >
        
        </>
    )
}
