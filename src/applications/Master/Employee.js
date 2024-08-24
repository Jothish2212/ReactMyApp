
import $ from 'jquery';
import axios from "axios";
import 'select2/dist/js/select2.min.js';
import React, { Fragment, useEffect, useState } from "react";

function Employee() {
    const [isValid, setisValid] = useState(false);
    const [countries, setCountries] = useState([]);
    const [states, setstates] = useState([]);
    const [EmpForm, setEmpForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        doorno: '',
        address: '',
        city: '',
        pincode: '',
        district: '',
        state: '',
        country: '',
    })

    function submitEmployee() {
        setisValid(true)
        if (validateEmployeeForm()) {

        }
    }
    // const fs = require('fs');

    useEffect(() => {
        getcountry();
        GetCountryWiseStates()
    }, []);

    async function getcountry() {
        axios.get(`http://127.0.0.1:8000/master/country/`)
            .then((res) => {
                setCountries(res.data.response)
            })
            .catch((error) => { console.log(error) })
    }
    async function GetCountryWiseStates() {
        axios.get(`http://127.0.0.1:8000/master/states/`)
            .then((res) => {
                setstates(res.data.response)
            })
            .catch((error) => { console.log(error) })
    }
    console.log(Array.isArray(countries))
    function validateEmployeeForm() {

    }
    useEffect(() => {
        $('#country').select2({
            placeholder: 'Select Country',
            allowClear: true
        });

        return () => {
            $('#country').select2('destroy');
        };
    }, []);

    function GetCountryWiseState(id){
        axios.get(`http://127.0.0.1:8000/master/GetCountryWiseState/${id}/`)
        .then((res) => {console.error(res)})
        .catch((error) => {console.error(error)})
    }
    return (
        <Fragment>
            <div className="container">
                <h2 className="text-blue-300">Add Employee</h2>
                <div className="box-border">
                    <div className="box-content">
                        <div className="box-default">
                            <div className="box-header">
                                <div className="box-primary">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-floating mb-3">
                                                <input type="text"
                                                    name='firstname'
                                                    id="firstname"
                                                    placeholder="First Name"
                                                    autoComplete='off'
                                                    className={`form-control ${isValid == false ? '' : isValid && EmpForm.firstname == '' ? 'is-invalid' : ''}`}
                                                />
                                                <label htmlFor="firstname">First Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-floating mb-3">
                                                <input type="text"
                                                    name='lastname'
                                                    id="lastname"
                                                    placeholder="First Name"
                                                    autoComplete='off'
                                                    className={`form-control ${isValid == false ? '' : isValid && EmpForm.firstname == '' ? 'is-invalid' : ''}`}
                                                />
                                                <label htmlFor="lastname">Last Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-floating mb-3">
                                                <input type="email"
                                                    name='email'
                                                    id="email"
                                                    placeholder="First Name"
                                                    autoComplete='off'
                                                    className={`form-control ${isValid == false ? '' : isValid && EmpForm.firstname == '' ? 'is-invalid' : ''}`}
                                                />
                                                <label htmlFor="email">E-mail</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-floating mb-3">
                                                <input type="text"
                                                    name='mobile'
                                                    id="mobile"
                                                    placeholder="First Name"
                                                    autoComplete='off'
                                                    className={`form-control ${isValid == false ? '' : isValid && EmpForm.firstname == '' ? 'is-invalid' : ''}`}

                                                />
                                                <label htmlFor="mobile">Mobile</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-floating mb-3">
                                                <input type="number"
                                                    name='doorno'
                                                    id="doorno"
                                                    placeholder="First Name"
                                                    autoComplete='off'
                                                    className={`form-control ${isValid == false ? '' : isValid && EmpForm.firstname == '' ? 'is-invalid' : ''}`}

                                                />
                                                <label htmlFor="doorno">Door No</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-floating mb-3">
                                                <input type="text"
                                                    name='address'
                                                    id="address"
                                                    placeholder="First Name"
                                                    autoComplete='off'
                                                    className={`form-control ${isValid == false ? '' : isValid && EmpForm.firstname == '' ? 'is-invalid' : ''}`}

                                                />
                                                <label htmlFor="address">Address</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-floating mb-3">
                                                <input type="text"
                                                    name='pincode'
                                                    id="pincode"
                                                    placeholder="First Name"
                                                    autoComplete='off'
                                                    className={`form-control ${isValid == false ? '' : isValid && EmpForm.firstname == '' ? 'is-invalid' : ''}`}

                                                />
                                                <label htmlFor="pincode">Pin-Code</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-floating mb-3">
                                                <input type="text"
                                                    name='city'
                                                    id="city"
                                                    placeholder="First Name"
                                                    autoComplete='off'
                                                    className={`form-control ${isValid == false ? '' : isValid && EmpForm.firstname == '' ? 'is-invalid' : ''}`}

                                                />
                                                <label htmlFor="city">City/Area</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-floating mb-3">
                                                <input type="text"
                                                    name='district'
                                                    id="district"
                                                    placeholder="First Name"
                                                    autoComplete='off'
                                                    className={`form-control ${isValid == false ? '' : isValid && EmpForm.firstname == '' ? 'is-invalid' : ''}`}

                                                />
                                                <label htmlFor="district">District</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-floating mb-3">
                                                <input type="text"
                                                    name='state'
                                                    id="state"
                                                    placeholder="First Name"
                                                    autoComplete='off'
                                                    className={`form-control ${isValid == false ? '' : isValid && EmpForm.firstname == '' ? 'is-invalid' : ''}`}

                                                />
                                                <label htmlFor="state">State</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-control" width="100%" id="country" onChange={(e)=>{GetCountryWiseState(e.target.value)}}>
                                                {countries.map((country,index)=>{
                                                    return(
                                                        <option key={index} className='form-control' value={country.id_country}>{country.name}</option>
                                                    )
                                                })}
                                            </select>
                                            {/* <label htmlFor="country">Country</label> */}
                                        </div>
                                    </div>
                                    <div align="center">
                                        <button className="btn btn-primary" onClick={submitEmployee}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Employee;