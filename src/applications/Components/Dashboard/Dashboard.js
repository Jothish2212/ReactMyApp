import React, { Fragment } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Navbar from "../Navbar";
import secureLocalStorage from "react-secure-storage";


function Dashboard() {
    const login_status = secureLocalStorage.getItem('tested_lmx');
    const navigate = useNavigate();

    if (login_status == null) {
        navigate('/admin/login/');
    }

    return (
        <Fragment>
            <div>
                <div className="container">
                    <Link to={`/admin/Customer`} className="p-2"><button type="button" className="btn btn-success">Add Customer</button></Link>
                    <Link to={`/admin/CustomerList`} className="p-2"><button type="button" className="btn btn-info">View</button></Link>
                    <Link to={`/admin/Employee`}><button className="btn btn-primary">Add Employee</button></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard;