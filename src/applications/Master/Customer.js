import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useLocation } from "react-router-dom";


function Customer() {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location)
    const edit_id_customer = location.state != null && location.state != undefined ? location.state.id : ''
    const [customerForm, setCustomerForm] = useState({
        firstname: '',
        mobile: '',
        email: '',
        address: '',
        pincode: '',
    })
    console.log(edit_id_customer);
    useEffect(() => {
        if (edit_id_customer != '') {
            get_customer_for_edit(edit_id_customer)
        }
    }, [edit_id_customer]);
    function get_customer_for_edit(edit_id_customer) {
        axios.get(`http://127.0.0.1:8000/master/customer/${edit_id_customer}/`)
            .then(response => {
                console.log(response)
                var response_data = response.data.response;
                console.log(response_data)
                setCustomerForm(response_data)
            })
            .catch(error => { console.log(error) })
    }
    function submitCustomerForm() {
        console.log(customerForm)
        if (edit_id_customer == '') {
            axios.post(`http://127.0.0.1:8000/master/customer/`, customerForm)
                .then(response => {
                    toast.success("Customer Created Successfully");
                    setCustomerForm({
                        firstname: '',
                        mobile: '',
                        email: '',
                        address: '',
                        pincode: '',
                    })
                    setTimeout(()=>{
                        navigate(`/admin/CustomerList`)
                    },3000) 
                })
                .catch(error => {
                    console.log(error)
                    toast.error(error);
                })
        }
        if (edit_id_customer != '') {
            axios.put(`http://127.0.0.1:8000/master/customer/${edit_id_customer}/`, customerForm)
                .then(response => {
                    console.log('Put_response', response)

                    toast.success(response.data.message);
                    setTimeout(() => {
                        navigate('/admin/CustomerList/')
                    }, 2000)
                })
                .catch(error => {
                    const statusCode = error.response ? error.response.status : 'Unknown';
                    var errorMessage = error.response ? error.response.data : error.message;
                    console.log('statusCode', statusCode)
                    console.log('errorMessage', errorMessage)
                    console.log('error.response', error.response)

                    if (typeof errorMessage === 'object') {
                        errorMessage = JSON.stringify(errorMessage, null, 2); // Convert object to a readable string format
                    }
                    toast.error(`Error ${statusCode}: ${errorMessage}`);

                })
        }
    }
    return (
        <Fragment>
            <div className="container bg-gray-300 p-10 m-10 rounded-2xl">
                <h3>{edit_id_customer != '' ? 'Edit' : 'Add'} Customer</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-3">
                            <div>
                                <label>Name</label>
                                <input type="text"
                                    name="firstname"
                                    value={customerForm.firstname}
                                    className="form-control"
                                    onChange={(e) => setCustomerForm({ ...customerForm, [e.target.name]: e.target.value })}
                                    placeholder="Enter Name" />
                            </div>
                            <div>
                                <label>Mobile</label>
                                <input type="number"
                                    name="mobile"
                                    className="form-control"
                                    onChange={(e) => setCustomerForm({ ...customerForm, [e.target.name]: e.target.value })}
                                    value={customerForm.mobile}
                                    placeholder="Enter Mobile" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="text"
                                    name="email"
                                    className="form-control"
                                    value={customerForm.email}
                                    onChange={(e) => setCustomerForm({ ...customerForm, [e.target.name]: e.target.value })}

                                    placeholder="Enter Email" />
                            </div>
                            <div>
                                <label>Address</label>
                                <input type="text"
                                    name="address"
                                    className="form-control"
                                    value={customerForm.address}
                                    onChange={(e) => setCustomerForm({ ...customerForm, [e.target.name]: e.target.value })}

                                    placeholder="Enter Address" />
                            </div>
                            <div>
                                <label>Pincode</label>
                                <input type="text"
                                    name="pincode"
                                    className="form-control"
                                    value={customerForm.pincode}
                                    onChange={(e) => setCustomerForm({ ...customerForm, [e.target.name]: e.target.value })}

                                    placeholder="Enter Pincode" />
                            </div>
                            <div className="py-2">
                                <button
                                    className="btn btn-success"
                                    onClick={submitCustomerForm}>{edit_id_customer != '' ? 'Update' : 'Save'}</button>
                            </div>

                        </div>
                    </div>

                </div>
                <ToastContainer />

            </div>

        </Fragment>
    )
}

export default Customer;