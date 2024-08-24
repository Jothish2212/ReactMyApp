import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";


function CustomerList() {

    const [customerData, SetCustomerData] = useState([])
    const navigate = useNavigate()

    function get_customer() {
        axios.get('http://127.0.0.1:8000/master/customer/')
            .then(response => {
                SetCustomerData(response.data.response)
                return console.log(response.data.response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        get_customer()
    }, [])
    console.log(customerData)

    function deletecus(id) {
        axios.delete(`http://127.0.0.1:8000/master/customer/${id}/`)
            .then(response => {
                const responseed = response.status == 200 ? 'success' : 'failure';
                console.log(response)
                console.log(responseed)
                if (responseed == 'success') {
                    toast.success(response.data)
                    setTimeout(() => {
                        get_customer()
                    }, 2000)
                }
            })
            .catch((error) => { })

    }
    return (
        <Fragment>
            <div className="container bg-gray-200 rounded-2xl m-10 h-screen">
                <div className="py-3">
                    <button type="button" className="bg-violet-900 btn btn-success " onClick={() => navigate('/admin/Customer/')}>Add Customer</button>
                </div>
                <p>List of Customers</p>
                <table className="table table-bordered table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Pincode</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerData.length > 0 ?
                            customerData.map((cus, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{cus.id_customer}</td>
                                        <td>{cus.cus_name}</td>
                                        <td>{cus.mobile}</td>
                                        <td>{cus.email}</td>
                                        <td>{cus.address}</td>
                                        <td>{cus.pincode}</td>
                                        <td><button type="button" onClick={() => navigate('/admin/Customer/', { state: { id: cus.id_customer } })} className="btn btn-success">Edit</button>
                                            <button type="button" onClick={() => deletecus(cus.id_customer)} className="px-2 btn btn-danger">Delete</button></td>
                                    </tr>
                                )
                            })
                            :
                            <tr>
                                <td colSpan={7} className="text-center">There is No Data</td>
                            </tr>
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
                <ToastContainer />
            </div>
        </Fragment>
    )
}

export default CustomerList