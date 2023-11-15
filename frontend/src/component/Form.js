import React from 'react'
import "./bootstrap.min.css";
import logo from "../images/NITT_logo.jpeg";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Form() {
    const navigate = useNavigate();
    const [items, setItems] = useState([
        { name: '', quantity: 0, price: 0, totalCost: 0 },
    ]);



    const [formdata,setformdata]=useState(null);
    const handlechangeonform=(e)=>{

        setformdata({...formdata, [ e.target.name]:e.target.value});
        console.log(formdata)
    }
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
    const calculateTotalAmount = () => {
        let totalAmount = 0;
        items.forEach((item) => {
          totalAmount += item.totalCost;
        });
        return totalAmount;
      };
      
    const onclickhandle=async(e)=>{
        e.preventDefault();
    const totalAmount = calculateTotalAmount(); // Calculate the total amount

    if (totalAmount > 25000) {
          alert('Total amount exceeds 25,000. Form cannot be submitted.');
    }else{
        let date= new Date(); 
     let year = date.getFullYear();
     let month= date.getMonth()+1;
     let day= date.getUTCDate();
     if(month<10)
     month='0'+month;
     let realdate= day+"/"+month+"/"+year;
        const Url_to_submit = 'http://localhost:5000/api/tools/submitform'
        const response = await fetch(Url_to_submit, {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'auth-token':localStorage.getItem('token'),
          },
          body: JSON.stringify( {name:formdata.name,department:items.department ,Items:items,Date:realdate,send_to:formdata.sendto} ),
        })
        const token = await response.json();
        if(token.success==true){
            alert("Form Submitted Successfully");
            
            console.log("Form submitted successfully");
            navigate('/');
        }else{
            console.log("Opps sorry");
        }

        

    } 
      
    }
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
                        <form id="bookingForm" action="#" method="" class="needs-validation" autocomplete="off" onSubmit={onclickhandle}>
                            <div className='row'>
                                <div class=" form-group col-md-6 ">
                                    <label for="inputState" class="text-dark font-weight-bold form-label">Department Of </label>
                                    <select name='department' id="inputState" class="border-dark rounded form-select " onChange={handlechangeonform} >
                                    <option value="">Select an option</option>
                                        <option value="CA" >Computer Application </option>
                                        

                                    </select>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label for="inputState" class="text-dark font-weight-bold form-label">Send To</label>
                                    <select name='sendto' id="inputState" class="border-dark rounded form-select " onChange={handlechangeonform}>
                                    <option value="">Select an option</option>
                                        <option value="HOD"  >HOD</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputName">Name</label>
                                <input type="text" class="form-control" id="inputName" name="name" placeholder="Your name" required onChange={handlechangeonform}  />
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
                                                        <button type="button" className='btn btn-danger' onClick={() => deleteItem(index)} disabled={items.length === 1}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="btn btn-success" type="button" onClick={addNewItem}>Add Item</button>



                            <hr />
                            <div className="text-end">
                                <strong>Total Amount: {calculateTotalAmount()}</strong>
                            </div>



                            {/* <div class="form-group">
                                <label for="textAreaRemark">Notes</label>
                                <textarea class="form-control" name="remark" id="textAreaRemark" rows="2" placeholder="Tell us you want more..."></textarea>
                            </div> */}

                            <button class="btn btn-success btn-block col-lg-2" type="submit" >Submit</button>

                        </form>

                    </div>
                </div>

            </div>
        </div >
        
        </>
    )
}
 