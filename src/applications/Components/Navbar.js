import React, { Fragment } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

function Navbar() {
    const navigate = useNavigate();
    function removeLocalstorage(){
        secureLocalStorage.removeItem('tested_lmx');
        navigate('/admin/login');

        window.location.reload();
        
    }
    return (
        <Fragment>
            <div className="w-full bg-slate-300">
                <div className="bg-green-300">
                    <div className="flex justify-between bg-green-300">
                        <div className="text-white">
                            <p>Company</p>
                        </div>
                        <div className="">
                            <ul className="flex items-center ">
                                <NavLink to={`/admin/home`} className=" text-white mx-4 my-1" style={{ textDecoration: 'none' }}>Home</NavLink>
                                <NavLink to={`/`} className=" text-white mx-4 my-1" style={{ textDecoration: 'none' }}>About</NavLink>
                                <NavLink to={`/`} className=" text-white mx-4 my-1" style={{ textDecoration: 'none' }}>Careers</NavLink>
                                <NavLink to={`/`} className=" text-white mx-4 my-1" style={{ textDecoration: 'none' }}>Contact</NavLink>
                                <NavLink to={`/`} className=" text-white mx-4 my-1" style={{ textDecoration: 'none' }}>Admin</NavLink>
                                {/* <NavLink to={`/admin/login`} className=" text-white mx-4 my-1" style={{ textDecoration: 'none' }}>Log Out</NavLink> */}
                                <button className="" onClick={removeLocalstorage}>Log Out</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Navbar;